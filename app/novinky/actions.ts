"use server";

import { EmailTemplateSubscribe } from "../components/EmailTemplateSubscribe";
import { Resend } from "resend";
import { z } from "zod";
import jwt from "jsonwebtoken";

const resend = new Resend(process.env.RESEND_API_KEY);

// Konec přihlašování newsletteru, zapsání do databáze
export async function confirmSubscription(token: string) {
  let email;

  try {
    email = String(jwt.verify(token, String(process.env.JWT_SECRET)));
  } catch (e) {
    console.error(e);
    return ["Chyba: neplatný odkaz, napište nám prosím na blazej@smyccem.cz"];
  }

  const schema = z.object({
    email: z.string().email(),
  });
  const parse = schema.safeParse({
    email,
  });

  if (!parse.success) {
    console.error(parse.error);
    return [
      "Chyba v aplikaci, neplatný email, napište nám prosím na blazej@smyccem.cz",
    ];
  }

  const { error } = await resend.contacts.create({
    email,
    audienceId: String(process.env.RESEND_AUDIENCE),
  });

  if (error) {
    console.error(error);
    return ["Chyba na straně serveru, napište nám prosím na blazej@smyccem.cz"];
  }

  return ["Úspěšné přihlášení", email];
}

// Začátek přihlašování k newsletteru, odeslání emailu
export async function startSubscription(
  _: {
    message: string;
  },
  formData: FormData
) {
  const schema = z.object({
    email: z.string().email(),
  });
  const parse = schema.safeParse({
    email: formData.get("email"),
  });

  if (!parse.success) {
    return {
      message:
        "Chyba aplikace: Nevalidní emailová adresa, napište nám prosím na blazej@smyccem.cz",
    };
  }

  const { email } = parse.data;

  const token = jwt.sign(email, String(process.env.JWT_SECRET));

  const { data, error } = await resend.emails.send({
    from: "Jednorožec Blažej <blazej@smyccem.cz>",
    to: [email],
    subject: "Trhni si smyčcem – Přihlášení k odběru novinek ",
    react: EmailTemplateSubscribe({ token }),
  });

  if (error) {
    console.error(error);
    throw "Chyba: nepodařilo založit adresu, napište nám prosím na blazej@smyccem.cz.";
  }

  return {
    message:
      "Odesláno, zkontrolujte si emailovou schránku, měl by vám dorazit žádostí o potvrzení",
  };
}

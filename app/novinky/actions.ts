"use server";

import { EmailTemplateSubscribe } from "../components/EmailTemplateSubscribe";
import { Resend } from "resend";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { baseUrl } from "app/basepath";
import { v4 as uuid } from "uuid";

const resend = new Resend(process.env.RESEND_API_KEY);

function validateEmail(emailInout: string) {
  const schema = z.object({
    email: z.string().email(),
  });
  const parse = schema.safeParse({
    email: emailInout,
  });
  return { ...parse, ...parse.data };
}

// Dokonceni prihlasovani novinek – zapsani do databaze
export async function confirmSubscription(token: string) {
  let inputEmail;

  try {
    inputEmail = String(jwt.verify(token, String(process.env.JWT_SECRET)));
  } catch (e) {
    console.error(e);
    return ["Chyba: neplatný odkaz, napište nám prosím na blazej@smyccem.cz"];
  }

  const { email } = validateEmail(inputEmail);

  if (!email) {
    return [
      "Chyba aplikace: Nevalidní emailová adresa, napište nám prosím na blazej@smyccem.cz",
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

// Zacatek prihlasovani novinek – odeslani emailu
export const startSubscription = async (
  formData: FormData,
  subscribeDirectly: boolean
) => {
  const { email } = validateEmail(String(formData.get("email")));

  if (!email) {
    return {
      message:
        "Chyba aplikace: Nevalidní emailová adresa, napište nám prosím na blazej@smyccem.cz",
    };
  }

  const token = jwt.sign(email, String(process.env.JWT_SECRET));

  const { error } = await resend.emails.send({
    from: "Jednorožec Blažej <blazej@smyccem.cz>",
    to: [email],
    subject: "Trhni si smyčcem – Přihlášení k odběru novinek ",
    react: EmailTemplateSubscribe({ token, subscribeDirectly }),
    headers: {
      "List-Unsubscribe": `<${baseUrl + "unsubscribe/" + token}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      "X-Entity-Ref-ID": uuid(),
      // Precedence: "bulk",
    },
  });

  if (error) {
    console.error(error);
    throw "Chyba: nepodařilo založit adresu, napište nám prosím na blazej@smyccem.cz.";
  }

  if (subscribeDirectly) {
    const [message, email] = await confirmSubscription(token);
    return { message };
  }

  return {
    message:
      "Odesláno, zkontrolujte si emailovou schránku a potvrďte svou adresu.",
  };
};

// Odhlaseni novinek
export async function unsubscribe(token: string) {
  let email;

  try {
    email = String(jwt.verify(token, String(process.env.JWT_SECRET)));
  } catch (e) {
    console.error(e);
    return [
      "Chyba aplikace: neplatný odkaz, napište nám prosím na blazej@smyccem.cz",
    ];
  }

  const { error } = await resend.contacts.remove({
    email,
    audienceId: String(process.env.RESEND_AUDIENCE),
  });

  if (error) {
    console.error(error);
    return ["Chyba na straně serveru, napište nám prosím na blazej@smyccem.cz"];
  }

  return ["Úspěšné odhlášení", email];
}

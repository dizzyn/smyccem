import { baseUrl } from "app/basepath";
import * as React from "react";
import { Button, Container } from "@react-email/components";
import { Section, Text, Link } from "@react-email/components";

interface EmailTemplateProps {
  token: string;
  subscribeDirectly: boolean;
}

const Box = ({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
}) => <div style={{ margin: "24px 32px", ...style }}>{children}</div>;

export const EmailTemplateSubscribe: React.FC<Readonly<EmailTemplateProps>> = ({
  token,
  subscribeDirectly,
}) => (
  <Container style={{ fontSize: "16px" }}>
    <Box>
      <h1>Blažejův ňůsvetr</h1>
      🦄 Ahoj, <br /> &nbsp;&nbsp;&nbsp;já jsem <b>Blažej</b>, dobrý přítel
      kapely <b>Trhni si smyčcem</b>.
    </Box>

    {subscribeDirectly ? (
      <Box style={{ textAlign: "center" }}>
        <b>Přihlašuji tě ke Zpravodaji.</b>
      </Box>
    ) : (
      <>
        <Box style={{ textAlign: "center" }}>
          <b>Prosím potvrď přihlášení k mému Zpravodaji, klikni zde ↓</b>
        </Box>
        <Box style={{ textAlign: "center" }}>
          <Button
            href={baseUrl + "novinky/" + token}
            style={{
              color: "white",
              background: "blueviolet",
              borderRadius: "6px",
              padding: "10px 20px",
            }}
          >
            Ano, potvrzuji, piš mi Blažeji
          </Button>
        </Box>
      </>
    )}

    <Box>
      Zasílám zhruba jednou měsíčně krátký přehled. Dozvíš se, kde{" "}
      <em>Trhni si smyčcem</em> hrají 🎸, co je nového a občas pustím i nějakou
      drobnost, ke které se nikdo mimo můj zpravodaj nedostane ☕️.
    </Box>

    <Box style={{ fontWeight: "bold", fontStyle: "italic" }}>
      Odhlásit se můžeš kdykoliv, jednoduše klikneš na odkaz v patičce mailu.
    </Box>

    <hr style={{ width: "30%", opacity: 0.5 }} />

    <Box>
      <div>
        ✂️ Aktuálně kapela rozjíždí šňůru koncertů, najdi si ten svůj na{" "}
        <a href="https://www.smyccem.cz/koncerty">
          http://smyccem.cz/koncerty🎸
        </a>
      </div>
    </Box>

    <Box>
      Měj se opravdu krásně, brzy Ti napíšu...
      <br />
      <br />
      ...tvůj Jednorožec Blažej ❤️
    </Box>

    <Section
      className="text-center"
      style={{
        fontSize: "14px",
        color: "gray",
        textAlign: "center",
        marginTop: "24px",
      }}
    >
      <hr style={{ width: "60%", opacity: 0.5 }} />
      <Text>
        <b>Trhni si smyčcem</b> – <em>Mezi punkem a filharmonií</em>
      </Text>
      <div>
        <Link href="https://youtube.com/@smyccem">Youtube</Link> –{" "}
        <Link href="https://facebook.com/smyccem">Facebook</Link> –{" "}
        <Link href="https://instagram.com/smyccem">Instagram</Link> /{" "}
        <Link href="https://smyccem.cz">www.smyccem.cz</Link>
      </div>
    </Section>

    {subscribeDirectly && (
      <Section style={{ textAlign: "right", fontSize: "14px" }}>
        <Link
          href={baseUrl + "unsubscribe/" + token}
          style={{ fontSize: "12px", color: "gray" }}
        >
          Odhlásit zasílání
        </Link>
      </Section>
    )}
  </Container>
);

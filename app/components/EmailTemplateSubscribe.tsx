import { baseUrl } from "app/basepath";
import * as React from "react";

interface EmailTemplateProps {
  token: string;
}

export const EmailTemplateSubscribe: React.FC<Readonly<EmailTemplateProps>> = ({
  token,
}) => (
  <div>
    <h1>Blažejův zpravodaj</h1>
    <p>
      Ahoj, já jsem <b>Blažej</b>🦄. Dobrý kamarád kapely{" "}
      <b>Trhni si smyčcem</b>.
    </p>
    <p>
      Porvrď prosím, že chceš na svůj email dostávat novinky,{" "}
      <a href={baseUrl + "novinky/" + token}>klikni zde</a>.
    </p>
    <p>
      Nemusíš se bát, svou volbu můžeš kdykoliv zrušit kliknutím na odkaz v
      patičce každého emailu.
    </p>
  </div>
);

import { baseUrl } from "app/basepath";
import { unsubscribe } from "app/novinky/actions";
import { NextRequest } from "next/server";

function pageTemplate({ title, text }: { title?: string; text?: string }) {
  return `<html>
    <head>
    <style>
    h1 { font-size: 24px}
    </style>
    </head>
    <body>
    ${title && `<h1>${title}</h1>`}
    ${text && `<p>${text}</p>`}
    <a href="${baseUrl}">Zpět na hlavní stranu</a>
    </body>
    </html>`;
}

function getToken(request: NextRequest) {
  return String(request.nextUrl.pathname).substring(13);
}

export async function GET(request: NextRequest) {
  const [message, email] = await unsubscribe(getToken(request));

  if (!email) {
    return new Response(
      pageTemplate({
        title: "Chyba odhlášení",
        text: message,
      }),
      {
        headers: { "Content-type": "text/html; charset=utf-8" },
        status: 400,
      }
    );
  }

  return new Response(
    pageTemplate({
      title: "Byli jste odhlášeni z novinek.",
      text: "Už vám je nebudeme zasílat, děkujeme.",
    }),
    {
      headers: { "Content-type": "text/html; charset=utf-8" },
      status: 200,
    }
  );
}

export async function POST(request: NextRequest) {
  console.log("UNSUBSCRIBE POST");

  const [message, email] = await unsubscribe(getToken(request));

  if (!email) {
    return new Response(
      pageTemplate({
        title: "Chyba odhlášení",
        text: message,
      }),
      {
        headers: { "Content-type": "text/html; charset=utf-8" },
        status: 400,
      }
    );
  }

  return new Response("", {
    status: 200,
  });
}

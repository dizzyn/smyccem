"use client";
import { useEffect, useState } from "react";
import { confirmSubscription } from "../actions";

interface Params {
  token: string;
}

export default function Validator({ token }: Params) {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setMessage("");
    setEmail("");
    confirmSubscription(token).then(([message, email]) => {
      setMessage(message);
      setEmail(email);
    });
  }, []);

  return (
    <>
      <h3 className="text-3xl">{message}</h3>
      {email}
    </>
  );
}

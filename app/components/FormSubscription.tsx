"use client";

import { useActionState, useMemo, useState } from "react";
import { startSubscription } from "../novinky/actions";
import Image from "next/image";
import { z } from "zod";
import classNames from "classnames";
import { EmailTemplateSubscribe, News } from "./EmailTemplateSubscribe";

export default function AddForm() {
  const [subscribeDirectly, setDirect] = useState(false);
  const [state, submitAction, pending] = useActionState<
    { message: string },
    FormData
  >(async (_, formdata) => startSubscription(formdata, subscribeDirectly), {
    message: "",
  });

  const [email, setEmail] = useState<string>();
  const valid = useMemo(() => {
    const schema = z.object({
      email: z.string().email(),
    });
    const { success } = schema.safeParse({
      email,
    });
    return success;
  }, [email]);

  // Trik jak zapsat lidi primo, bez potvrzeni
  const bind = {
    onClick: () => setDirect(!subscribeDirectly),
    onTouchStart: () => setDirect(!subscribeDirectly),
  };

  return (
    <form
      action={submitAction}
      className={classNames(
        "border-white/90 border-2 bg-black/50 mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-col xl:flex-row text-left"
      )}
    >
      <div className="flex-1 p-4">
        <h3 className="text-1xl lg:text-2xl font-bold ">
          {subscribeDirectly ? (
            "Zapsat do listu bez potvrzení"
          ) : (
            <>
              <span {...bind}>Zpravodaj</span> Jednorožce Blažeje
            </>
          )}
        </h3>
        Posíláme na e-mail několikrát do roka kde budeme hrát, co je nového a co
        se chystá.
      </div>
      <div className="flex-1 p-4">
        {!state?.message && (
          <>
            <label htmlFor="email">Napište svůj e-mail</label>
            <div className="flex flex-col gap-2 md:flex-row mt-2 group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="@"
                className="h-10 active:ring-0 focus:outline-0 bg-transparent! pl-2 grow border-white/90 border-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={pending || !valid}
                className="flex flex-row bg-white/90 hover:underline items-center px-2 text-black cursor-pointer disabled:hover:no-underline disabled:text-gray-400"
              >
                <div className="grow">
                  {pending
                    ? "Odesílání"
                    : subscribeDirectly
                      ? "Zapsat"
                      : "Odeslat"}
                </div>
                <Image
                  src="/unicorn-l.png"
                  alt=""
                  width={40}
                  height={40}
                  className="hover:transform-3d group-hover:animate-[swing_1s_infinite] group-focus-within:animate-[swing_1s_infinite] flex-none"
                />
              </button>
            </div>
          </>
        )}
        <div className="text-2xl">{state?.message}</div>
      </div>
    </form>
  );
}

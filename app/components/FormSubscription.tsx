"use client";

import { useActionState, useMemo, useState } from "react";
import { startSubscription } from "../novinky/actions";
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
        "grid gap-8 border-t border-stone-100/15 pt-10 text-left lg:grid-cols-2 lg:gap-16 lg:pt-14"
      )}
    >
      <div>
        <h3 className="font-display text-2xl text-stone-50 lg:text-3xl">
          {subscribeDirectly ? (
            "Zapsat do listu bez potvrzení"
          ) : (
            <>
              <span {...bind}>Zpravodaj</span>{" "}
              <span className="italic text-accent-soft">
                Jednorožce Blažeje
              </span>
            </>
          )}
        </h3>
        <p className="mt-3 text-stone-300/80">
          Posíláme na e-mail několikrát do roka kde budeme hrát, co je nového
          a co se chystá.
        </p>
      </div>
      <div>
        {!state?.message && (
          <>
            <label
              htmlFor="email"
              className="text-[11px] uppercase tracking-[0.25em] text-stone-300/80"
            >
              Napište svůj e-mail
            </label>
            <div className="group mt-3 flex flex-col gap-4 sm:flex-row sm:items-end">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="@"
                className="h-10 grow border-0 border-b border-stone-100/40 bg-transparent! text-lg text-stone-100 focus:border-accent focus:outline-0 active:ring-0"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={pending || !valid}
                className="flex h-10 shrink-0 cursor-pointer flex-row items-center border border-stone-100/40 px-4 text-[11px] uppercase tracking-[0.25em] text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black disabled:cursor-default disabled:text-stone-300/40 disabled:hover:border-stone-100/40 disabled:hover:bg-transparent"
              >
                <div className="grow">
                  {pending
                    ? "Odesílání"
                    : subscribeDirectly
                      ? "Zapsat"
                      : "Odeslat"}
                </div>
              </button>
            </div>
          </>
        )}
        <div className="mt-4 text-stone-100">{state?.message}</div>
      </div>
    </form>
  );
}

"use client";

import { I18nProviderClient } from "@/locales/client";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
  return (
    <I18nProviderClient locale={props.locale}>
      {props.children}
      <Toaster position="bottom-right" />
    </I18nProviderClient>
  );
};

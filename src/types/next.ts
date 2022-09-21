import { NextComponentType, NextPage, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type AppPropsWithLayout<P = {}> = AppProps & {
  Component: NextLayoutComponentType;
};

export type NextLayoutComponentType<P = {}> = NextComponentType<
  NextPageContext,
  any,
  P
> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

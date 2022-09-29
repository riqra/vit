import { AnchorHTMLAttributes } from "react";

interface iFloatingActionButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: string,
  colorLink?: string
}

export type {
  iFloatingActionButton
}

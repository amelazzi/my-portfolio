import { RefObject } from "react";

export const handleStyleUpdate = <T extends HTMLElement>(
  pathname: string,
  ref: RefObject<T>,
  style1: string,
  style2: string
) => {
  if (ref.current) {
    ref.current.style.cssText =
      pathname !== "/" && pathname !== "/about" ? style1 : style2;
  }
};

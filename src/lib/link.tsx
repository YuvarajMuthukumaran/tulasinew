// A drop-in for next/link: renders a plain <a> whose address is the matching page on the old website.
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { toOld } from "./old-site";

type Href = string | { pathname?: string | null; hash?: string | null };
type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: Href;
  prefetch?: boolean | null;
  scroll?: boolean;
  replace?: boolean;
  shallow?: boolean;
  children?: ReactNode;
};

export default function Link({ href, prefetch: _prefetch, scroll: _scroll, replace: _replace, shallow: _shallow, ...rest }: Props) {
  void _prefetch;
  void _scroll;
  void _replace;
  void _shallow;
  const raw = typeof href === "string" ? href : `${href.pathname ?? ""}${href.hash ? `#${href.hash}` : ""}`;
  return <a href={toOld(raw)} {...rest} />;
}

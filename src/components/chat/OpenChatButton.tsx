// In this dummy site the chat is off (it needs the live server), so "Ask Tulasi" goes to the old contact page.
import type { ReactNode } from "react";
import { toOld } from "@/lib/old-site";
import TulasiMascot from "./TulasiMascot";

export function OpenChatButton({ children, className, mascot = true }: { children: ReactNode; className?: string; mascot?: boolean }) {
  return (
    <a href={toOld("/contact-us/")} className={className}>
      {mascot && <TulasiMascot mood="happy" className="size-6 shrink-0" />}
      {children}
    </a>
  );
}

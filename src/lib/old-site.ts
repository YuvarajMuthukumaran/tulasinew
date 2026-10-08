// Every link on this dummy site (home page + booking page) forwards to the old website. Most pages keep the same address there
// (/anxiety/, /our-team/, /deaddiction-centre/ ...). The pages that only exist on the new site are sent
// to the closest old page instead. "/" stays on this home page.
export const OLD_ORIGIN = "https://www.tulasihealthcare.com";

const SAME_PAGE_ELSEWHERE: Record<string, string> = {
  "/patient-login/": "/contact-us/",
  "/portal/": "/contact-us/",
  "/find-a-specialist/": "/our-team/",
  "/mental-health-check/": "/contact-us/",
  "/locations/": "/map-direction/",
  "/conditions/": "/services-2/",
  "/addiction-treatment/": "/deaddiction-centre/",
  "/lgbtq-support/": "/contact-us/",
  "/psychological-services/": "/psychologist-in-delhi/",
};

export function toOld(href: string): string {
  if (!href || /^(https?:|tel:|mailto:|sms:|whatsapp:|javascript:|#|\/\/)/i.test(href) || !href.startsWith("/")) return href;
  if (href === "/" || href.startsWith("/#")) return href; // this home page
  if (/^\/book-appointment\/?(\?|#|$)/.test(href)) return href; // the one inner page kept on this site
  const path = href.split("#")[0].split("?")[0];
  const clean = path.endsWith("/") ? path : `${path}/`;
  return OLD_ORIGIN + (SAME_PAGE_ELSEWHERE[clean] ?? path);
}

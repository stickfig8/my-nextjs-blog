import { Heading } from "@/config/types";

export function scrollToHeading(heading:Heading) {
  const el = document.getElementById(heading.id);
    if (el) {
        const loc = el.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({ top: loc, behavior: 'smooth'});
    }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

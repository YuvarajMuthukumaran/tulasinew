// The floating "Book Appointment" button. It opens the booking page of this site.
export function FloatingBook() {
  return (
    <a
      href="/book-appointment/"
      className="floating-actions fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-600 px-5 text-[0.9375rem] font-semibold text-white shadow-[0_14px_30px_-12px_rgb(15_40_71/0.6)] transition-colors hover:bg-brand-700"
    >
      Book Appointment
    </a>
  );
}

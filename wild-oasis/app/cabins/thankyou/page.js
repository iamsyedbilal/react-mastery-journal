import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-primary-800 bg-primary-900/80 p-10 text-center shadow-2xl backdrop-blur-sm">
        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-500/15 ring-1 ring-accent-500/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-accent-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-100">
          Reservation Confirmed
        </h1>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-lg text-lg leading-8 text-primary-300">
          Thank you for choosing us. Your reservation has been successfully
          received, and we can&apos;t wait to welcome you for a relaxing stay.
        </p>

        {/* Button */}
        <Link
          href="/account/reservation"
          className="inline-flex items-center gap-3 rounded-xl bg-accent-500 px-8 py-4 text-lg font-semibold text-primary-950 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/20">
          Manage Reservations
          <span className="text-xl">→</span>
        </Link>

        {/* Footer */}
        <p className="mt-8 text-sm text-primary-500">
          Need to make changes? You can update or cancel your reservation from
          your account at any time.
        </p>
      </div>
    </div>
  );
}

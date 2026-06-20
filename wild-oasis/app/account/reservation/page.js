// import ReservationCard from "@/app/_components/ReservationCard";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default function Page() {
  const bookings = [];

  return (
    <div>
      <h2 className="text-3xl font-light text-accent-500 mb-8">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <div className="rounded-xl border border-primary-800 bg-primary-950 p-10 text-center">
          <p className="text-primary-200 mb-6">You have no reservations yet.</p>

          <Link
            href="/cabins"
            className="inline-block rounded-lg bg-accent-500 px-6 py-3 font-semibold text-primary-900
            hover:bg-accent-600 transition-all">
            Explore luxury cabins →
          </Link>
        </div>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            // <ReservationCard booking={booking} key={booking.id} />
            <h1 key={booking.id}>Reservation</h1>
          ))}
        </ul>
      )}
    </div>
  );
}

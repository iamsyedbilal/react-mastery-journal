import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <h2 className="text-3xl font-light text-accent-500 mb-4">
        Welcome, {session?.user?.name}
      </h2>

      <p className="text-primary-200 text-lg">
        Manage your stays, profile, and upcoming experiences in one place.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-primary-800 bg-primary-950 p-6">
          <h3 className="text-accent-500 font-semibold mb-2">Reservations</h3>
          <p className="text-primary-200 text-sm">
            View and manage your bookings.
          </p>
        </div>

        <div className="rounded-xl border border-primary-800 bg-primary-950 p-6">
          <h3 className="text-accent-500 font-semibold mb-2">Profile</h3>
          <p className="text-primary-200 text-sm">
            Update your personal information.
          </p>
        </div>
      </div>
    </div>
  );
}

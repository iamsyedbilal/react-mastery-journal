import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "../../_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div>
      <h2 className="text-3xl font-light text-accent-500 mb-3">
        Update your guest profile
      </h2>

      <p className="text-primary-200 mb-10 max-w-xl">
        Help us personalize your stay and speed up your check-in experience.
      </p>
      <UpdateProfileForm guest={guest} />
    </div>
  );
}

import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = {
  title: "Update profile",
};

export default function Page() {
  return (
    <div>
      <h2 className="text-3xl font-light text-accent-500 mb-3">
        Update your guest profile
      </h2>

      <p className="text-primary-200 mb-10 max-w-xl">
        Help us personalize your stay and speed up your check-in experience.
      </p>
      <UpdateProfileForm />
    </div>
  );
}

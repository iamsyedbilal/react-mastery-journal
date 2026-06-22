import SelectCountry from "./SelectCountry";

export default function UpdateProfileForm() {
  let nationality = "portugal";
  return (
    <form className="space-y-8">
      {/* Card */}
      <div className="rounded-xl border border-primary-800 bg-primary-950 p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <label className="text-sm text-primary-300">Full name</label>
          <input
            disabled
            className="w-full rounded-lg bg-primary-900 px-5 py-3 text-primary-100 border border-primary-800
              disabled:opacity-50"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-primary-300">Email address</label>
          <input
            disabled
            className="w-full rounded-lg bg-primary-900 px-5 py-3 text-primary-100 border border-primary-800
              disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-primary-300">
            Where are you from?
          </label>
          <SelectCountry defaultCountry={nationality} />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-primary-300">National ID number</label>
          <input
            className="w-full rounded-lg bg-primary-900 px-5 py-3 text-primary-100 border border-primary-800
              focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          className="rounded-xl bg-accent-500 px-8 py-4 font-semibold text-primary-900
            transition-all hover:bg-accent-600 hover:shadow-[0_0_30px_rgba(198,153,99,0.3)]">
          Update profile
        </button>
      </div>
    </form>
  );
}

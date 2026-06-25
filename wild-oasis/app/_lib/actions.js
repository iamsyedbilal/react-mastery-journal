"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getCountryDataList } from "countries-list";
import { redirect } from "next/navigation";

const countries = getCountryDataList();

function getFlagFromCountry(countryName) {
  const country = countries.find((c) => c.name === countryName);

  if (!country) return null;

  return `https://flagcdn.com/${country.iso2.toLowerCase()}.svg`;
}

export async function updateGuestProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationality = formData.get("nationality");
  const nationalID = formData.get("nationalID");

  if (!nationality) throw new Error("Nationality is required");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Please provide a valid national ID");
  }

  const countryFlag = getFlagFromCountry(nationality);

  const updateData = {
    nationality,
    nationalID,
    countryFlag,
  };

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
  redirect("/account/profile");
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/",
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

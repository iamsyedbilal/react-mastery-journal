"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getCountryDataList } from "countries-list";
import { redirect } from "next/navigation";
import { getBookings } from "./data-service";

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

export async function deleteReservation(bookingId) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase.from("booking").delete().eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking");

  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  const { error } = await supabase
    .from("booking")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) throw new Error("Booking could not be updated");

  revalidatePath(`/account/reservation/edit/${bookingId}`);
  revalidatePath("/account/reservation");

  redirect("/account/reservation");
}

export async function createBooking(bookingData, formData) {
  console.log(bookingData);
  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extraPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { data, error } = await supabase
    .from("booking")
    .insert([newBooking])
    .select();

  console.log(error);
  console.log(data);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/",
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

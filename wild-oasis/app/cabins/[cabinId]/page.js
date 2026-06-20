import { getCabin } from "@/app/_lib/data-service";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;

  const cabin = await getCabin(cabinId);

  return {
    title: `Cabin ${cabin.name}`,
    description: `Stay in Cabin ${cabin.name} with room for up to ${cabin.maxCapacity} guests.`,
  };
}

export default async function page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  console.log(cabin);

  return (
    <div>
      <Image src={cabin.image} alt={cabin.name} width={800} height={600} />
    </div>
  );
}

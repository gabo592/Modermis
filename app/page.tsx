import { TypographyH1 } from "@/components/Typography";
import Navbar from "@/components/common/navbar/Navbar";
import MedicineImage from "@/public/assets/svg/medicine.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <section className="flex flex-col items-center gap-8">
          <TypographyH1>Tu salud y la de tu piel son importantes</TypographyH1>
          <Image
            src={MedicineImage}
            alt="medicine"
            className="w-full md:max-w-md h-auto"
          />
        </section>
      </main>
    </>
  );
}

"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const NavigationBackButton = () => {
  const router = useRouter();
  return (
    <Button variant="outline" size="icon" onClick={() => router.back()}>
      <ArrowLeftIcon />
    </Button>
  );
};

export default NavigationBackButton;

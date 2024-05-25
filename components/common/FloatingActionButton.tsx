"use client";

import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const FloatingActionButton = () => {
  return (
    <Button size="icon" className="fixed bottom-5 right-5">
      <HamburgerMenuIcon />
    </Button>
  );
};

export default FloatingActionButton;

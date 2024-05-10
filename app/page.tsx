import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Modermis</h1>
      <Button>Click</Button>
      <ModeToggle></ModeToggle>
    </main>
  );
}

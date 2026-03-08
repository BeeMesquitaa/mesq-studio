import { StudioInject } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesq Werner | Studio",
  description: "Study project",
};

const Studio = () => {
  return (
    <main>
      <StudioInject />
    </main>
  );
};

export default Studio;

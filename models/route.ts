import { IconProps } from "@radix-ui/react-icons/dist/types";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Route {
  path: string;
  title: string;
  icon?:
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >
    | ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

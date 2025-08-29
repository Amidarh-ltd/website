"use client";
import logoLight from "@/public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const { push } = useRouter();
  return (
    <Image
      src={logoLight}
      alt="Amidarh"
      className="w-10 h-10 cursor-pointer"
      onClick={() => push("/")}
    />
  );
};

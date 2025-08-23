"use client"

import Link from "next/link";
import { HeaderClient } from "./components.client";
// import { buttonVariants } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { Products } from "./products";
import { Sidebar } from "./sidebar";
import { Button } from "@/components/ui/button";
import { Waitlist, WaitlistButton } from "@/core/commons/waitlist";
import { useRouter } from "next/navigation";
import { Logo } from "@/core/commons/ui";

export async function Header({isTrupper}: {isTrupper?: boolean}) {
  const { push } = useRouter();

    return (
    <HeaderClient>
        <div className="flex justify-center items-center">
            <nav className='px-4 xl:px-0 py-3 lg:py-4 container relative z-20 flex justify-between items-center'>
                <div className="">
                    <Logo />
                </div>
                {isTrupper ?
                <div className="space-x-4 min-[800px]:flex max-[800px]:hidden flex flex-row items-center">
                    <WaitlistButton size="sm" />
                </div>
                :<div className="space-x-4 min-[800px]:flex max-[800px]:hidden flex flex-row items-center">
                    <Button variant="outline"
                        onClick={() => push("/signup")}
                    >
                        Sign up
                    </Button>
                    <div>|</div>
                    <Button
                        onClick={() => push("/login")}
                    >
                        Login
                    </Button>
                </div>}
                <Sidebar/>
            </nav>
        </div>
        <Waitlist />
    </HeaderClient>
  );
}

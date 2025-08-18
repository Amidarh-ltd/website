"use client"

import Link from "next/link";
import { HeaderClient } from "./components.client";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Products } from "./products";
import { Sidebar } from "./sidebar";
import { Button } from "@/components/ui/button";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export async function Header({isTrupper}: {isTrupper?: boolean}) {
  return (
    <HeaderClient>
        <div className="flex justify-center items-center">
            <nav className='px-4 xl:px-0 py-3 lg:py-4 container relative z-20 flex justify-between items-center'>
                <div className="">
                    <Link href="/">
                        <Image src={Logo} alt="Amidarh" className="w-10 h-10" />
                    </Link>
                </div>
                <div className="min-[800px]:flex items-center gap-4 max-[800px]:hidden">
                    <Link
                        href="/trupper"
                        className="relative font-semibold text-lg text-gray-900 transition-all duration-200 hover:text-indigo-700 group"
                    >
                        <span>
                            Try Trupper
                        </span>
                        <span
                            className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
                {isTrupper ?
                <div className="space-x-4 min-[800px]:flex max-[800px]:hidden flex flex-row items-center">
                    <Button>
                        Join Waitlist
                    </Button>
                </div>
                :<div className="space-x-4 min-[800px]:flex max-[800px]:hidden flex flex-row items-center">
                    {/* <Link
                    href='/##'
                    className={buttonVariants({ className:"dark:bg-white bg-primary text-primary dark:text-white" })}
                    >
                        Sign up
                    </Link> */}
                    <Button variant="outline">
                        Sign up
                    </Button>
                    <div>|</div>
                    <Button>
                        Login
                    </Button>
                </div>}
                <Sidebar/>
            </nav>
        </div>
    </HeaderClient>
  );
}

import Link from "next/link";
import { HeaderClient } from "./components.client";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Products } from "./products";
import { Sidebar } from "./sidebar";
import { Button } from "@/components/ui/button";

export async function Header() {
  return (
    <HeaderClient>
        <div className="flex justify-center items-center">
            <nav className='px-4 xl:px-0 py-3 lg:py-4 container relative z-20 flex justify-between items-center'>
                <div className="">
                    <Link href="/">
                    <h1 className="text-2xl font-bold">Amidarh</h1>
                    </Link>
                </div>
                {/* <div className="min-[800px]:flex items-center gap-4 max-[800px]:hidden">
                    <Products/>
                    <Link href="##">
                        About Us
                    </Link>
                </div> */}
                <div className="space-x-4 min-[800px]:flex max-[800px]:hidden flex flex-row items-center">
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
                </div>
                <Sidebar/>
            </nav>
        </div>
    </HeaderClient>
  );
}

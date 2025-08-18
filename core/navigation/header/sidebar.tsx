import { Menu } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="min-[800px]:hidden max-[800px]:block text-primary"/>
      </SheetTrigger>
      <SheetContent>
        <div className="space-y-5 flex flex-col mt-5">
            <Link href="/">Home</Link>
            <Link href="##">About Us</Link>
            <Link href="##">Products</Link>
            <Link href="/trupper">--Trupper</Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

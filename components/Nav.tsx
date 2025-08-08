import Link from "next/link"
import { SignInButton, SignedIn,SignedOut, UserButton } from "@clerk/nextjs"


export default function Nav() {
  return (
    <nav className="w-full h-[50px] p-2 flex item-center justify-between border-b">

    <div className="flex items-center gap-2 text-sm">
        <Link href="/">Home</Link>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-out">Sign Out</Link>
    </div>

    <div className="">

        <SignedOut>
            <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton></UserButton>
        </SignedIn>
    </div>

    </nav>
  )
}

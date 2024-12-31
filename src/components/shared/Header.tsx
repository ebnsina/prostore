import { Home01Icon, Menu02Icon, ShoppingBag01Icon } from "hugeicons-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <div className="container mx-auto px-4 flex justify-between items-center border-b py-3 text-slate-600">
        <button type="button">
          <Menu02Icon size={22} />
        </button>

        <Link href="/">
          <Home01Icon size={30} color="cyan" />
        </Link>

        <div className="flex space-x-6 items-center">
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/cart">
            <ShoppingBag01Icon size={22} />
          </Link>

          <Link href="/signin">Sign in</Link>
        </div>
      </div>
    </header>
  );
}

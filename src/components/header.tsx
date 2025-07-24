import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CartWidget } from './cart-widget'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="relative w-[320px] rounded-full bg-zinc-900 ring-zinc-700">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-7 size-5 h-11 -translate-1/2 text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="h-full w-full bg-transparent px-5 py-3 pl-12 text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            className="h-6 w-6 rounded-full"
            src="https://github.com/jordane-chaves.png"
            alt=""
            height={24}
            width={24}
          />
        </Link>
      </div>
    </header>
  )
}

'use client'

import { SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-[320px] rounded-full bg-zinc-900 ring-zinc-700"
    >
      <SearchIcon className="pointer-events-none absolute top-1/2 left-7 size-5 h-11 -translate-1/2 text-zinc-500" />

      <input
        defaultValue={query ?? ''}
        name="q"
        placeholder="Buscar produtos..."
        className="h-full w-full bg-transparent px-5 py-3 pl-12 text-sm outline-none placeholder:text-zinc-500"
        required
      />
    </form>
  )
}

'use client'
import { useRouter, usePathname } from 'next/navigation'
import { locales } from '@/config'

export const LocaleSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const seg = pathname.split('/')
  const current = seg[1]

  const switchLocale = (locale: string) => {
    seg[1] = locale
    router.push(seg.join('/'))
  }

  return (
    <select
      value={current}
      onChange={(e) => switchLocale(e.target.value)}
      className="rounded border px-2 py-1 text-sm"
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  )
}
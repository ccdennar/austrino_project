'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { LocaleSwitcher } from './LocaleSwitcher'

export const Header = () => {
  const t = useTranslations('nav')
  const links = ['home', 'services', 'contact'] as const

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-brand-600">
          Austrino
        </Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l}
              href={`#${l}`}
              className="text-sm font-medium text-gray-700 hover:text-brand-600"
            >
              {t(l)}
            </Link>
          ))}
        </nav>

        <LocaleSwitcher />
      </div>
    </header>
  )
}
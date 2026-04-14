'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const storageKey = 'shreyas-theme'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const currentTheme =
      (root.dataset.theme as Theme | undefined) ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')

    root.dataset.theme = currentTheme
    setTheme(currentTheme)
    setMounted(true)
  }, [])

  function toggleTheme() {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem(storageKey, nextTheme)
    setTheme(nextTheme)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--subtle)] hover:text-[var(--foreground)]"
      aria-label={
        mounted && theme === 'light'
          ? 'Switch to dark theme'
          : 'Switch to light theme'
      }
    >
      {mounted ? theme : 'light'}
    </button>
  )
}

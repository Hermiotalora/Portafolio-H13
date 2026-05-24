"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className="uppercase px-3 py-1 bg-transparent border border-white text-white hover:bg-white hover:text-black rounded transition"
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('es')}
        className="uppercase px-3 py-1 bg-transparent border border-white text-white hover:bg-white hover:text-black rounded transition"
      >
        ES
      </button>
    </div>
  )
}

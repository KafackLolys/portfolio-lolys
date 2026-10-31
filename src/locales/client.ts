"use client"
import { createI18nClient } from 'next-international/client'
 /**
  * Utilisation 
  * const t = useScopedI18n('home') spécifique
  * const t = useI18n(); Globale
  */
export const { useI18n, useScopedI18n, I18nProviderClient, useCurrentLocale, useChangeLocale } = createI18nClient({
  en: () => import('./en'),
  fr: () => import('./fr'),
}) 
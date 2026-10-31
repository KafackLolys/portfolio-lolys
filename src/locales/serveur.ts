import { createI18nServer } from 'next-international/server'

/**
  * Utilisation 
  * const t = getScopedI18n('home') spécifique
  * const t = getI18n(); Globale
  */
export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import('./en'),
  fr: () => import('./fr')
})
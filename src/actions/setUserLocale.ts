'use server'
 
import { Locale } from 'next-intl'
import { cookies } from 'next/headers'
 
export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies()
 
  cookieStore.set('language', locale, { secure: true, httpOnly: false })
 
}
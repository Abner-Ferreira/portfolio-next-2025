'use client'
import { useTranslations } from 'next-intl'
import { BiArrowBack } from 'react-icons/bi'

export default function NotFound() {

  const t = useTranslations("Error")
  
  return (
    <main
      className='
        min-h-screen
        w-full
        flex
        flex-col
        items-center
        justify-center
        gap-12
        px-4
        text-[var(--mainText)]
        lg:flex-row
        lg:gap-24
      '
    >
      {/* Image section */}
      <div
        className='
          w-full
          max-w-md
          flex
          flex-col
          items-center
          justify-center
        '
      >
        <img
          src='/dogs-not-found.svg'
          alt='dog not found image'
          className='
            w-full
            h-52
            max-w-md
            sm:max-w-sm
            lg:h-max
            lg:max-w-md
          '
        />

        <p className='text-lg sm:text-xl mt-6'>
          {t.rich("error_type", {
              redWord: (chunks) => <span className='text-[var(--red)]'>{chunks}</span>
          })}
        </p>
      </div>

      {/* Text section */}
      <div
        className='
          w-full
          max-w-xl
          flex
          flex-col
          items-center
          lg:items-start
          text-center
          lg:text-left
        '
      >
        <h1 className='text-2xl sm:text-3xl font-bold'>{t("error_title")}</h1>

        <p className='text-sm sm:text-md my-6'>
          {t("error_description")}
        </p>

        <a
          href='/'
          className='
            flex
            items-center
            justify-center
            gap-2
            w-full
            sm:w-2/3
            lg:w-auto
            px-6
            py-2
            border-2
            border-[var(--yellow)]
            bg-[var(--yellow)]
            text-[var(--black)]
            hover:bg-transparent
            hover:text-[var(--yellow)]
            transition-all
            duration-300
            font-medium
          '
        >
          <BiArrowBack />
          {t("error_button")}
        </a>
      </div>
    </main>
  )
}

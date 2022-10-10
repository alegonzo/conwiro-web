import useTranslation from 'next-translate/useTranslation'

export default function Culture() {
  const { t } = useTranslation('common')

  return (
    <div className="bg-secondary py-40">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
            {t('culture.title')}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-white">
            {t('culture.sub')}
          </p>
        </div>
      </div>
    </div>
  )
}

import useTranslation from 'next-translate/useTranslation'

export default function Heading() {
  const { t } = useTranslation('common')

  return (
    <div id="home" className="relative bg-white py-32">
      <div className="absolute inset-0">
        {/*<img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
  />*/}
        <div
          className="absolute inset-0 bg-gray-600 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8 space-y-4">
        <h1 className="text-2xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          {t('heading.art')}
        </h1>
        <h1 className="text-2xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          {t('heading.creativity')}
        </h1>
        <h1 className="text-2xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          {t('heading.entertainment')}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-white">{t('heading.sub')}</p>
        <div className="mt-10">
          <a
            href="mailto:teamconwiro@gmail.com"
            className="inline-flex rounded-md border border-transparent bg-primary px-4 py-2 text-xl font-medium text-white shadow-2xl hover:bg-gray-700"
          >
            {t('contact')}
          </a>
        </div>
      </div>
    </div>
  )
}

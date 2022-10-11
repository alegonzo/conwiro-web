import useTranslation from 'next-translate/useTranslation'

export default function Games() {
  const { t } = useTranslation('common')

  return (
    <div className="relative overflow-hidden bg-black py-40">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6 space-y-8">
                <h2 className="text-5xl font-bold tracking-tight text-white drop">
                  {t('games.title')}
                </h2>
                <p className="mt-4 text-xl text-white">{t('games.sub')}</p>
                <div className="mt-6">
                  <a
                    href="https://mechinfinity.com"
                    target={'_blank'}
                    className="inline-flex rounded-md border border-transparent bg-primary px-4 py-2 text-xl font-medium text-white shadow-2xl hover:bg-gray-700"
                  >
                    Mech Infinity
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 sm:mt-6 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/assets/mech.png"
                alt="Mech"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

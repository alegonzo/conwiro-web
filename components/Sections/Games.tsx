import useTranslation from 'next-translate/useTranslation'

export default function Games() {
  const { t } = useTranslation('common')
  return (
    <div className="relative overflow-hidden pt-32 pb-32">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={`/assets/games/mech/bg_mech.png`}
          alt="People working on laptops"
        />
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6 space-y-6 bg-black bg-opacity-40 p-8 rounded-xl shadow-lg">
                <h2 className="text-5xl font-bold tracking-tight text-white drop">
                  {t('games.title')}
                </h2>
                <img
                  className="max-w-full"
                  src={`/assets/games/mech/logo.png`}
                  alt="Inbox user interface"
                />
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
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/assets/mech.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  /*return (
    <div className="relative overflow-hidden bg-black">
      <div className="relative inset-0">
        <img
          className="h-full w-full object-cover"
          src={`/assets/games/mech/bg_mech.png`}
          alt="People working on laptops"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 py-4 z-10">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
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
          <div className="mt-2 sm:mt-6 lg:mt-0">
            <div className="pl-4 sm:pl-6 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                src="/assets/mech.png"
                alt="Mech"
              />
            </div>
          </div>
        </div>
      </div>
    </div>*/
}

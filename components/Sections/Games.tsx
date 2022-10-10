import { SparklesIcon } from '@heroicons/react/solid'
import useTranslation from 'next-translate/useTranslation'

export default function Games() {
  const { t } = useTranslation('common')

  return (
    <div className="relative overflow-hidden bg-secondary pt-16 pb-32">
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/assets/mech.png"
                alt="Mech"
              />
            </div>
          </div>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-md">
                  {t('games.title')}
                </h2>
                <p className="mt-4 text-lg text-white">{t('games.sub')}</p>
                <div className="mt-6">
                  <a
                    href="https://www.mechinfinity.com"
                    target={'_blank'}
                    className="inline-flex rounded-3xl border border-transparent bg-primary px-6 py-2 text-base font-medium text-white shadow-md hover:bg-secondary"
                  >
                    Mech Infinity
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

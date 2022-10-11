import {
  BookmarkAltIcon,
  CashIcon,
  GlobeAltIcon,
  PuzzleIcon,
  ScaleIcon,
  TrendingUpIcon,
} from '@heroicons/react/solid'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'

export default function Premises() {
  const { t } = useTranslation('common')

  const features = useMemo(
    () => [
      {
        name: t('premises.title1'),
        description: t('premises.text1'),
        icon: PuzzleIcon,
      },
      {
        name: t('premises.title2'),
        description: t('premises.text2'),
        icon: CashIcon,
      },
      {
        name: t('premises.title3'),
        description: t('premises.text3'),
        icon: TrendingUpIcon,
      },
    ],
    [t]
  )

  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-12 space-y-20">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl drop-shadow-md">
            {t('premises.title')}
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

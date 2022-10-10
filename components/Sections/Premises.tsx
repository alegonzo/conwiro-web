import {
  BookmarkAltIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/solid'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'

export default function Premises() {
  const { t } = useTranslation('common')

  const features = useMemo(
    () => [
      {
        description: t('premises.text1'),
        icon: GlobeAltIcon,
      },
      {
        description: t('premises.text2'),
        icon: ScaleIcon,
      },
      {
        description: t('premises.text3'),
        icon: BookmarkAltIcon,
      },
    ],
    [t]
  )

  return (
    <div className="bg-white py-40">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-12">
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl drop-shadow-md">
            {t('premises.title')}
          </h2>
        </div>
        <dl className="mt-10 space-y-10">
          {features.map((item, idx) => (
            <div key={idx} className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

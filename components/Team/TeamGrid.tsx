import useTranslation from 'next-translate/useTranslation'
import { TEAM } from '../../lib/data'
import TeamItem from './TeamItem'

export default function TeamGrid() {
  const { t } = useTranslation('common')

  return (
    <div id="team" className="bg-white py-12">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-16">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl drop-shadow-md">
              {t('team.title')}
            </h2>
            <p className="text-xl text-gray-500">{t('team.sub')}</p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            {TEAM.map((item) => (
              <li key={item.id}>
                <TeamItem {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

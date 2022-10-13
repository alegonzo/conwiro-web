import useTranslation from 'next-translate/useTranslation'
import { GAMES } from '../../lib/data'
import GameItem from './GameItem'

export default function GamesGrid() {
  const { t } = useTranslation('common')

  return (
    <div className="bg-black py-40 z-10 relative">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
            {t('web2.title')}
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {GAMES.map((game) => (
            <GameItem
              key={game.id}
              id={game.id}
              poster={game.poster}
              link={game.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

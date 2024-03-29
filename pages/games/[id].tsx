import { useRouter } from 'next/router'
import { GAMES } from '../../lib/data'
import GameDetail from '../../components/Games/GameDetail'
import useTranslation from 'next-translate/useTranslation'

export default function GamePage() {
  const router = useRouter()
  const { id } = router.query
  const game = GAMES.find((item) => item.id === id)

  if (!game) return <p>Not found</p>

  return (
    <div className="bg-white">
      {game && (
        <GameDetail
          id={game?.id}
          bg={game.bg}
          sections={game?.sections || []}
          gallery={game.gallery}
        />
      )}
    </div>
  )
}

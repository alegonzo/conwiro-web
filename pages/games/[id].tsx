import { useRouter } from 'next/router'
import { GAMES } from '../../lib/data'
import GameDetail from '../../components/Games/GameDetail'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticPropsContext } from 'next'

export default function GamePage({ game }) {
  const router = useRouter()
  const { lang } = useTranslation('common')
  const { id } = router.query
  //const game = GAMES.find((item) => item.id === id)

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

export async function getStaticPaths() {
  return {
    paths: [
      ...GAMES.map((item) => ({ params: { id: item.id }, locale: 'en' })),
      ...GAMES.map((item) => ({ params: { id: item.id } })),
    ],
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params
  return {
    props: {
      game: GAMES.find((item) => item.id === id),
    },
  }
}

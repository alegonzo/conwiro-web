/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { GAMES } from '../../lib/data'
import GameDetail from '../../components/Games/GameDetail'
import useTranslation from 'next-translate/useTranslation'

export default function GamePage() {
  const router = useRouter()
  const { lang } = useTranslation('common')
  const { id } = router.query
  const game = GAMES.find((item) => item.id === id)
  if (!game) {
    return ''
  }

  return (
    <div className="bg-white">
      <GameDetail
        id={game?.id}
        name={game.name}
        bg={game.bg}
        description={lang === 'es' ? game.description.es : game.description.en}
        logo={game.logo}
        mainImage={game.mainImage}
        gallery={game.gallery || []}
      />
    </div>
  )
}

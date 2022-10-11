import Link from 'next/link'

type GameItemProps = {
  id: string
  poster: string
  link: string
}

const GameItem = ({ id, poster, link }: GameItemProps) => {
  return (
    <div key={id} className="group relative">
      <div className="min-h-100 w-full overflow-hidden bg-gray-200 rounded-lg group-hover:shadow-xl group-hover:shadow-primary lg:aspect-none lg:h-100">
        <Link href={link}>
          <a>
            <img
              src={`/assets/games${poster}`}
              alt={id}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default GameItem

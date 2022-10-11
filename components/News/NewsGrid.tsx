import { NEWS } from '../../lib/data'
import NewsItem from './NewsItem'

export default function NewsGrid() {
  return (
    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      {NEWS.map((item) => (
        <NewsItem key={item.id} {...item} />
      ))}
    </div>
  )
}

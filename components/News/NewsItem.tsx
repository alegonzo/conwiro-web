type PostItemProps = {
  title: string
  description: string
  image: string
  link: string
  date: string
}

const NewsItem = ({ title, description, image, link, date }: PostItemProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={`/assets/news/${image}`}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-sm text-gray-500">{date}</p>
          <a href={link} target="_blank" className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem

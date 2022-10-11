import useTranslation from 'next-translate/useTranslation'
import NewsGrid from '../../components/News/NewsGrid'

export default function NewsPage() {
  const { t } = useTranslation('common')

  return (
    <div className="relative bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-start">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('news.title')}
          </h2>
        </div>
        <NewsGrid />
      </div>
    </div>
  )
}

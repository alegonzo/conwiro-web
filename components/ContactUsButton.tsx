import useTranslation from 'next-translate/useTranslation'

export default function ContactUsButton() {
  const { t } = useTranslation('common')
  return (
    <div className="mt-10">
      <a
        href="mailto:teamconwiro@gmail.com"
        className="inline-flex rounded-md border border-transparent bg-primary px-4 py-2 text-xl font-medium text-white shadow-2xl hover:bg-gray-700"
      >
        {t('contact')}
      </a>
    </div>
  )
}

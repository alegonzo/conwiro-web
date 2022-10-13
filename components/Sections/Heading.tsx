import useTranslation from 'next-translate/useTranslation'
import ContactUsButton from '../ContactUsButton'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function Heading() {
  const { t } = useTranslation('common')

  return (
    <div id="home" className="relative bg-black h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <ReactPlayer
          className="video-background"
          url="https://youtu.be/YwUXyFN2BiI"
          width="100%"
          height="100%"
          volume={0}
          config={{
            youtube: {
              playerVars: { showinfo: 0, controls: 0 },
            },
          }}
          playing={true}
          muted={true}
          loop={true}
        />
        <div
          className="absolute inset-0 bg-gray-600 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8 space-y-4">
        <h1 className="text-2xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          {t('heading.art')}
        </h1>
        <h1 className="text-2xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          {t('heading.creativity')}
        </h1>
        <h1 className="text-2xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          {t('heading.entertainment')}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-white">{t('heading.sub')}</p>
        <ContactUsButton />
      </div>
    </div>
  )
}

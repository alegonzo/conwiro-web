import useTranslation from 'next-translate/useTranslation'
import ContactUsButton from '../ContactUsButton'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function Heading() {
  const { t } = useTranslation('common')

  return (
    <div id="home" className="relative bg-white py-32">
      <div className="absolute inset-0 overflow-hidden">
        {/*<img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
  />*/}
        <ReactPlayer
          url="https://youtu.be/YwUXyFN2BiI"
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
          }}
          volume={0}
          config={{
            youtube: {
              playerVars: { showinfo: 0, controls: 0, height: 500 },
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

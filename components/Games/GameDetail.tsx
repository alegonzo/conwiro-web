import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import ContactUsButton from '../ContactUsButton'
import { Carousel } from 'react-responsive-carousel'
import { useResponsive } from 'ahooks'
import { useEffect, useState } from 'react'

type GameDetailProps = {
  id: string
  bg?: string
  bgColor?: string
  gallery: Gallery
  sections: Section[]
}

type Gallery = {
  items: string[]
  bgColor?: string
  bgImage: string
}

type Section = {
  imagePosition: string
  image: string
  description: Description
  bgColor: string
  textColor: string
  bgImage: string
}

type Description = {
  en: string
  es: string
}

export default function GameDetail({
  id,
  bg,
  gallery,
  sections,
}: GameDetailProps) {
  const { lang } = useTranslation('common')
  const responsive = useResponsive()
  const [percent, setPercent] = useState(100)

  useEffect(() => {
    const isSmall = responsive
      ? (responsive.xs || responsive.sm) &&
        !responsive.md &&
        !responsive.lg &&
        !responsive.xl
      : true
    setPercent(isSmall ? 100 : 33)
  }, [responsive])

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative ">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />

        <div className="relative shadow-xl sm:overflow-hidden sm:py-20 lg:py-40">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={`/assets/games${bg}`}
              alt="People working on laptops"
            />
          </div>
          <div className="flex relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 text-center justify-center justify-items-center">
            {/*<div className="self-center">
                <img src={`/assets/games${logo}`} />
              </div>*/}
            <ContactUsButton />
          </div>
        </div>
      </div>

      {sections.map((section, idx) => {
        if (section.imagePosition === 'left') {
          return (
            <div key={idx} className="relative mt-24 pb-24">
              {section.bgImage && (
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={`/assets/games${section.bgImage}`}
                    alt="People working on laptops"
                  />
                </div>
              )}
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                  <div>
                    <div className="mt-6">
                      <p className={clsx('mt-4 text-lg', section.textColor)}>
                        {lang === 'en'
                          ? section.description.en
                          : section.description.es}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                  <div className="pr-4 sm:pr-6 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img
                      className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src={`/assets/games${section.image}`}
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        } else {
          return (
            <div key={idx} className="relative overflow-hidden pt-32 pb-32">
              {section.bgImage && (
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={`/assets/games${section.bgImage}`}
                    alt="People working on laptops"
                  />
                </div>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-48"
              />
              <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                  <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                    <div>
                      <div className="mt-6">
                        <p className={clsx('mt-4 text-lg', section.textColor)}>
                          {lang === 'en'
                            ? section.description.en
                            : section.description.es}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="pl-4 sm:pl-6 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        className="w-full rounded-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src={`/assets/games${section.image}`}
                        alt="Inbox user interface"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      })}

      <div className={'relative'}>
        <div
          className={clsx('relative sm:overflow-hidden py-20', gallery.bgColor)}
        >
          {gallery.bgImage && (
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={`/assets/games${gallery.bgImage}`}
                alt="People working on laptops"
              />
            </div>
          )}
          <div className="flex relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 text-center justify-center justify-items-center">
            <Carousel
              showArrows={true}
              showStatus={false}
              centerMode={true}
              showThumbs={false}
              swipeable={true}
              centerSlidePercentage={percent}
            >
              {gallery.items.map((item, idx) => (
                <img
                  key={idx}
                  src={`/assets/games${item}`}
                  className="px-1 rounded-2xl"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

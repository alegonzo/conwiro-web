type GameDetailProps = {
  id: string
  name: string
  mainImage: string
  logo: string
  bg?: string
  gallery: string[]
  description: string
}

export default function GameDetail({
  id,
  name,
  mainImage,
  logo,
  bg,
  gallery,
  description,
}: GameDetailProps) {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative mb-24 lg:mt-24 md:mt-24">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={`${window.origin}/assets/games${bg}`}
                alt="People working on laptops"
              />
            </div>
            <div className="flex relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 text-center justify-center justify-items-center">
              <div className="self-center">
                <img src={`${window.origin}/assets/games${logo}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 mb-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  {name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">{description}</p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="pr-4 sm:pr-6 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={`${window.origin}/assets/games${mainImage}`}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

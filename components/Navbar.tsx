import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ROUTES } from '../lib/constants'

export default function Navbar() {
  const router = useRouter()

  const { t } = useTranslation('common')

  return (
    <Disclosure as="nav" className="bg-black py-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src="/logo_conwiro.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src="/logo_conwiro.png"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {ROUTES.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={clsx(
                          'border-transparent text-white hover:border-gray-300 hover:text-secondary',
                          'inline-flex items-center px-1 pt-1 pb-2 border-b-2 text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {t(`routes.${item.name}`)}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-white hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {ROUTES.map((item) => (
                <Link key={item.name} href={item.href} passHref={true}>
                  <Disclosure.Button
                    as="a"
                    className={clsx(
                      'border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {t(`routes.${item.name}`)}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

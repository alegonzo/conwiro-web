import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="min-h-full bg-white">
        <Navbar />

        <main>
          <div className="mx-auto">{children}</div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Layout

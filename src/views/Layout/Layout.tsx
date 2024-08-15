import Footer from '@/components/Footer'
import LeftMenu from '@/components/LeftMenu'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="grid flex-row grid-cols-[240px_auto]">
        <aside className="w-240px h-screen bg-gray-200">
          <LeftMenu />
        </aside>
        <main className="relative px-20px bg-gray-100">
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  )
}

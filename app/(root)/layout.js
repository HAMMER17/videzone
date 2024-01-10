import { Roboto } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import LeftSideBar from '../components/LeftSideBar'
import MainContainer from '../components/MainContainer'
import TopBar from '../components/TopBar'
import RightSideBar from '../components/RightSideBar'
import BottomBar from '../components/BottomBar'

const inter = Roboto({ weight: '500', subsets: ['cyrillic'] })

export const metadata = {
  title: 'Socials Media',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-slate-800`}>
          <main className=' flex flex-row'>
            <LeftSideBar />
            <MainContainer>
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
import '@/assets/styles.scss'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Open_Sans } from '@next/font/google';

const font = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  style: ['normal']
})

export default function App({ Component, pageProps }) {
  return(
    <div className={font.className}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
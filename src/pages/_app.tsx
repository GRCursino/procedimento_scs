import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import Link from 'next/link';
import Image from 'next/image';

import logoSCS from '../assets/logoSCS.png'

import { HeaderContainer, HeaderContent } from '../styles/pages/app';
import {Footer } from '../components/Footer'
import { ProceduresProvider } from '../contexts/ProcedimentosContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Link href={"/"}>
            <Image src={logoSCS} width={220} height={120} alt="" />
          </Link>
        </HeaderContent>
      </HeaderContainer>

      <ProceduresProvider>
        <Component {...pageProps} />
      </ProceduresProvider>

      <Footer />  
    </>
  )
}

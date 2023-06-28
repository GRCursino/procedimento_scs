import Head from "next/head"
import Image from "next/image"

import { BuscaProcedimentos } from "../components/BuscaProcedimentos"

import { HomeContainer } from "../styles/pages/home"
import { ProcedimentosContainer, ProcedimentosTabela } from "../styles/tabelaProcedimento"

import procedimentoImg from '../assets/procedimentoImg.png'
import Link from "next/link"
import { useContext, useEffect } from "react"
import { ProceduresContext } from "@/contexts/ProcedimentosContext"

export default function Home() {

  const { procedures } = useContext(ProceduresContext)

  function reloadPage() {
    const time = 1000 * 60 * 5; // minutes  

    setTimeout(() => {
      window.location.reload()
    } , time)
  }

  useEffect(() => {
    reloadPage()
  }, [])

  return (
    <>
      <Head>
        <title>Home | Procedimentos</title>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>

      <HomeContainer>
        <Image src={procedimentoImg} width={1120} alt=""/>

        <BuscaProcedimentos />

        <ProcedimentosContainer>
          <ProcedimentosTabela>
            {!procedures || procedures.length == 0
              ? 
               <tbody>
                  <tr>              
                    <td width="12%">
                      ---------------
                    </td>
                    <td>Lista de procedimentos vazia ou não encontrada.</td>
                  </tr>
               </tbody> 
              :
              <tbody>
                {procedures.map(procedimento => {
                    return (
                      <Link href={`/procedimento/${procedimento.CD_PROCEDIMENTO}`}>
                        <tr key={procedimento.CD_PROCEDIMENTO}>              
                          <td width="12%">
                              {procedimento.CD_PROCEDIMENTO}
                          </td>
                          <td>{procedimento.PROCEDIMENTO}</td>
                        </tr>
                      </Link>
                    )
                })
                }            
              </tbody>
            }
          </ProcedimentosTabela>
        </ProcedimentosContainer>
      </HomeContainer>
    </>
  )
}

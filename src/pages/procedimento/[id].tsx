import Head from "next/head"

import { ProcedimentoContainer, ProcedimentoContent, ProcedimentoDetails, UtilsContent } from "../../styles/pages/procedimento";
import { Printer, ArrowCircleLeft } from 'phosphor-react';

import { GetServerSideProps } from "next";

import { api } from "@/lib/axios";
import Link from "next/link";

interface ProcedimentoProps {
  procedure: {
    CD_PROCEDIMENTO: string;
    PROCEDIMENTO: string;
    CLASSIFICAÇÃO: string;
    RACIONALIZACAO: string;
    PRAZO: string;
    NIVEL: number;
    CD_CARENCIA: number;
    CARENCIA: string;
  } 
}

export default function Procedimento({ procedure }: ProcedimentoProps){

  function imprimirProcedimento(){
    window.print()
  }

  return (
    <>
      <Head>
        <title>Procedimento | SCS</title>
      </Head>

      <ProcedimentoContainer>
        <ProcedimentoContent>
          <h2>Procedimento</h2>

          <ProcedimentoDetails>
            <strong>Código TUSS</strong>
            <p>
              {procedure.CD_PROCEDIMENTO}
            </p>
          </ProcedimentoDetails>

          <ProcedimentoDetails>
            <strong>Descrição do Procedimento</strong>
            <p>
              {procedure.PROCEDIMENTO}
            </p>
          </ProcedimentoDetails>

          <ProcedimentoDetails>
            <strong>Documentação complementar necessária para autorização</strong>
            <p>
              {procedure.RACIONALIZACAO}
            </p>
          </ProcedimentoDetails>

          <ProcedimentoDetails>
            <strong>Tipo de carência/Grupo de procedimentos</strong>
            <p>
              {procedure.CARENCIA}
            </p>
          </ProcedimentoDetails>

          <ProcedimentoDetails>
            <strong>Prazo para resposta</strong>
            <p>
              {procedure.PRAZO}
            </p>
          </ProcedimentoDetails>

          <UtilsContent>
            <Link type="button" href="/">
              <ArrowCircleLeft size={32}/>
              Voltar ao início
            </Link>

            <button type="button" value="Imprimir" onClick={imprimirProcedimento}>
              <Printer size={32}/>
              Clique aqui para imprimir
            </button>
          </UtilsContent>
        </ProcedimentoContent>
      </ProcedimentoContainer>
      
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = String(params?.id);

  const response = await api.get('procedure/', {
    params: {
      q: query
    }
  })
  
  const { procedure } = response.data

  return {
    props: {
      procedure
    }
  }
}
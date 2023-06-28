import { FooterContainer, FooterConteudo } from "../styles/components/footer";

import Image from "next/image";

import  aplicativoImg from '../assets/aplicativo.png'
import  autorizadorImg from '../assets/autorizador.png'
import  endereçoImg  from '../assets/endereço.png'

export function Footer() {
  return (
    <FooterContainer>
      <FooterConteudo>
        <div>
          <a href={"http://200.220.137.230:60080/autorizacao/solicitar"} target="_blank">
            <Image src={autorizadorImg} width={355} height={300} alt=""/>
          </a>
        </div>

        <div>
          <a href={"https://www.planosantacasasaude.com/beneficiario/rede-medica-locais-de-atendimento/"} target="_blank">
            <Image src={endereçoImg} width={355} height={300} alt=""/>
          </a>
        </div>

        <div>
          <a href={"https://www.planosantacasasaude.com/beneficiario/comunicados/baixe-o-novo-aplicativo-agora/"} target="_blank">
            <Image src={aplicativoImg} width={355} height={300} alt=""/>
          </a>
        </div>
      </FooterConteudo>
    </FooterContainer>
  )
}
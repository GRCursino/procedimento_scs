import { styled } from "..";

export const FooterContainer = styled('footer', {
  width: '100%',
  maxWidth: '1120px',
  margin: '3rem auto 0',
})

export const FooterConteudo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',

  //padding: '1rem'
  gap: '0 2rem',

  img: {
    objectFit: 'cover' // ajusta imagem no container conforme tamanho exportado
  },
})
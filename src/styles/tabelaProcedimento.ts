import { styled } from ".";

export const ProcedimentosContainer = styled('main', {
  width: '100%',
  maxWidth: '1120px',
  margin: '3rem auto 0',
  //padding: '0 1.5rem'
})

export const ProcedimentosTabela = styled('table', {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0 0.5rem,',  

  'a': {
    color: '$gray',
    textDecoration: 'none',

    td: {
      padding: '1.25rem 2rem',
      background : '$blue300',
      color: '$gray300',
      borderRadius: '6px',
      verticalAlign: 'middle',

      '&:hover': {
        backgroundColor: '$blue900',
        transition: 'background-color 0.2s'
      },
    }
  },

})
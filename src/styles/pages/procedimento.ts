import { styled } from '..';

export const ProcedimentoContainer = styled('main', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 1.5rem',

  '@media print': {
    'html, body': {
        width: '130mm',
        height: '207mm'        
    }
  }

 // marginTop: '2rem',
})

export const ProcedimentoContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  gap: '2.5rem 0',

  h2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    background: '$blue900',
    color: '$gray200',
    padding : '0.5rem',
    borderRadius: '6px'
  }
})

export const ProcedimentoDetails = styled('div', {
  width: '100%',
  textAlign: 'center',
  lineHeight: 1.6,
  background: '$blue300',
  borderRadius: '6px',
  border: '3px solid $blue300',

  strong: {
    padding: '2rem',
    fontSize: '$lg',
    color: '$gray200',
  },

  p: {
    padding: '0.5rem',
    fontSize: '$md',
    background: '$gray200'
  }
})

export const UtilsContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    width: '270px',

    border: '0',
    background: '$blue600',
    color: '$gray300',
    borderRadius: '6px',
    padding: '1rem',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$blue900',
      transition: 'background-color 0.2s'
    }
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '230px',
    gap: '0.75rem',
    padding: '1rem',
    fontSize: '$md',
    fontWeight: 'bold',

    background: '$blue600',
    color: '$gray300',
    borderRadius: '6px',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: '$blue900',
      transition: 'background-color 0.2s'
    }
  }
})



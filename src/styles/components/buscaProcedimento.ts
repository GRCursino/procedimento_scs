import { styled } from '..'

export const SearchFormContainer = styled('form', {
  display: 'flex',
  gap: '1rem',

  marginTop: '2rem',

  input: {
    flex: 1,
    borderRadius: '6px',
    border: '3px solid',
    borderColor: '$blue600',
    color: '$black',
    padding:'1rem',
    fontSize: '$md',

    '&:focus': {
      outline: 0,
      borderColor: '$blue900',
      transition: 'border-color 0.2s'
    }
  //  borderColor: '$blue900'
  }, 
  
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',

    border: 0,
    background: '$blue600',
    color: '$gray300',
    borderRadius: '6px',
    padding: '1rem',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$blue900',
      transition: 'background-color 0.2s'
    }
  }
})
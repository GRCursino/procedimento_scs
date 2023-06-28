import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from '../styles/components/buscaProcedimento'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { ProceduresContext } from '../contexts/ProcedimentosContext'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function BuscaProcedimentos() {
  const { carregarProcedimentos } = useContext(ProceduresContext);

  const { 
    register, 
    handleSubmit,
    formState: {
      isSubmitting
    } 
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchProcedures(data: SearchFormInputs){
    await carregarProcedimentos(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchProcedures)}>
      <input 
        type="text" 
        placeholder="Busque por procedimentos"
        {...register('query')} 
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}
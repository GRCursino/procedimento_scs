import { api } from '@/lib/axios';
import { ReactNode, createContext, useEffect, useState } from 'react'

interface Procedure {
  CD_PROCEDIMENTO: number,
  PROCEDIMENTO: String
}

interface ProcedureContextType {
  procedures: Procedure[];
  carregarProcedimentos: (query?: string) => Promise<void>;
}

interface ProceduresProvidersProps {
  children: ReactNode
}

export const ProceduresContext = createContext({} as ProcedureContextType);

export function ProceduresProvider({ children }: ProceduresProvidersProps) {
  const [procedures, setProcedures] = useState<Procedure[]>([]);

   async function carregarProcedimentos(query?: string) {

    const response = await api.get('procedures/', {
      params: {
        q: query
      }
    })
    
    setProcedures(response.data.procedures);
  } 
  
  return (
    <ProceduresContext.Provider value={{ 
      procedures,
      carregarProcedimentos 
    }}>
      {children}
    </ProceduresContext.Provider>
  )
}
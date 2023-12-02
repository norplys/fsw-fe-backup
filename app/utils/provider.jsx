"use client"

import { useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

export function Provider({ children }) {
    const [queryClient] = useState(() => new QueryClient())
    
    return (
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
    )
}

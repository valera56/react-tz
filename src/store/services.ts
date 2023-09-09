import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Tickets } from './types'

const API_TICKETS = "http://localhost:8000/tickets"

type ticketResponse = Tickets[]

export const ticketsApi = createApi({
    reducerPath: 'ticketsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_TICKETS }),
    endpoints: builder => ({
        getTicketsByName: builder.query<ticketResponse, void>({
            query: () => `/`,
        }),
    }),
})

export const { useGetTicketsByNameQuery } = ticketsApi

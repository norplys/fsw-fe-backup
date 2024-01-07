import { useQuery } from "react-query"
import axios from "axios"

function paymentStatusQueries(token) {
    return axios.get(`https://api.academy-skillhub.com/v1/admin/payment-status`,{
        headers: {
            Authorization: `Bearer ${token}`
        
        }
    })
}

export function usePaymentStatus(token){ 
    return useQuery(["paymentStatus", token],() => paymentStatusQueries(token), {
        select: (data) => {
            return data.data.data
        }
    })

}
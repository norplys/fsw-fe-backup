import { useQuery } from "react-query"
import axios from "axios"

function paymentStatusQueries(token) {
    return axios.get(`https://final-project-online-course.et.r.appspot.com/v1/admin/payment-status`,{
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
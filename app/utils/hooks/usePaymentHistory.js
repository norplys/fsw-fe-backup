import {useQuery} from "react-query"
import axios from "axios"

function paymentQueries(token) {
    return axios.get("https://api.academy-skillhub.com/v1/courses/payment-history", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export function usePaymentHistory(token){
    return useQuery(["categories", token], () => paymentQueries(token), {
        select: (data) => data.data.data
    })

}
import { useQuery } from "react-query"
import axios from "axios"

function adminStatisticQueries(token) {
    return axios.get(`https://api.academy-skillhub.com/v1/admin/statistic`,{
        headers: {
            Authorization: `Bearer ${token}`
        
        }
    })
}

export function useAdminStatistic(token){ 
    return useQuery(["adminStatistic", token],() => adminStatisticQueries(token), {
        select: (data) => {
            return data.data.data
        }
    })

}
import { useQuery } from "react-query"
import axios from "axios"

function adminStatisticQueries(token) {
    return axios.get(`https://final-project-online-course.et.r.appspot.com/v1/admin/statistic`,{
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
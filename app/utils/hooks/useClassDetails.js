import {useQuery} from 'react-query';
import axios from 'axios';

function classDetailsQueries(id, token) {
    if(!token){
        return axios.get(`https://api.academy-skillhub.com/v1/course/${id}`)
    }
    return axios.get(`https://api.academy-skillhub.com/v1/course/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }  
    })
}
export function useClassDetails(id, token){
    return useQuery(["classDetails" , id, token], () => classDetailsQueries(id, token), {
        select: (data) => {
            return data.data.data
        }
    })

}
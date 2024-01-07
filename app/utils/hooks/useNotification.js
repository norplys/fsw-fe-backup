import {useQuery} from "react-query"
import axios from "axios"

function notificationQueries(token) {
    return axios.get("https://api.academy-skillhub.com/v1/notification", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export function useNotification(token){
    return useQuery(["notification", token], () => notificationQueries(token), {
        select: (data) => data.data.data
    });

}
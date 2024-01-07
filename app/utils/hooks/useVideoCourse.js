import {useQuery} from "react-query"
import axios from "axios"

function videoQueries(token,id) {
    if(!id) return Promise.resolve(
        {
            data: {
                data: {
                    course_link: "",
                }
            }
        }
    )
    return axios.get(`https://api.academy-skillhub.com/v1/courses/video-course/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function useVideoData(token, id){
    return useQuery(["categories", token, id], () => videoQueries(token, id), {
        select: (data) => data.data.data.course_link,
    }) 

}
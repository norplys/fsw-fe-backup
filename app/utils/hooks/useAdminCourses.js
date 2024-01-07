import { useQuery } from "react-query"
import axios from "axios"

function adminCoursesQueries(search) {
    if(!search) return axios.get(`https://api.academy-skillhub.com/v1/courses`)
    return axios.get(`https://api.academy-skillhub.com/v1/courses?search=${search}`)
}

export function useAdminCourses(search){ 
    return useQuery(["adminCourses", search],() => adminCoursesQueries(search), {
        select: (data) => {
            return data.data.data
        }
    })

}
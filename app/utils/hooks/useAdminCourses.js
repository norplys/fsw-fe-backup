import { useQuery } from "react-query"
import axios from "axios"

function adminCoursesQueries(search) {
    if(!search) return axios.get(`https://final-project-online-course.et.r.appspot.com/v1/courses`)
    return axios.get(`https://final-project-online-course.et.r.appspot.com/v1/courses?search=${search}`)
}

export function useAdminCourses(search){ 
    return useQuery(["adminCourses", search],() => adminCoursesQueries(search), {
        select: (data) => {
            return data.data.data
        }
    })

}
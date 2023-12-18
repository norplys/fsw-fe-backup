import { useQuery } from "react-query"
import axios from "axios"

function adminCoursesQueries(token) { 
    return axios.get("https://api.learnify.risalamin.com/courses")
}

export function useAdminCourses(token){ 
    return useQuery(["adminCourses", token], () =>  adminCoursesQueries(token), {
        select: (data) => {
            return data.data.data
        }
    })

}
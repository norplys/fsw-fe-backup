import {useQuery} from "react-query"
import axios from "axios"

function coursesQueries() {
    return axios.get("https://final-project-online-course.et.r.appspot.com/v1/courses")
}

export function useCoursesData() {
    return useQuery("courses", coursesQueries, {
        select: (data) => {
            return data.data.data
        }
    })
}


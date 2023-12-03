import {useQuery} from "react-query"
import axios from "axios"

function categoriesQueries() {
    return axios.get("https://final-project-online-course.et.r.appspot.com/v1/course-categories")
}

export function useCategoriesData(){
    return useQuery("categories", categoriesQueries, {
        select: (data) => {
            return data.data.data
        }
    })

}
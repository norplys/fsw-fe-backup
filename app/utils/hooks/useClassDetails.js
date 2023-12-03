import {useQuery} from 'react-query';
import axios from 'axios';

function classDetailsQueries(id) {
    return axios.get(`https://final-project-online-course.et.r.appspot.com/v1/course/${id}`)
}

export function useClassDetails(id){
    return useQuery(["classDetails" , id], () => classDetailsQueries(id), {
        select: (data) => {
            return data.data.data
        }
    })

}
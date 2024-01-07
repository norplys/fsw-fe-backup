import { useQuery } from "react-query";
import axios from "axios";

function coursesQueries(category, level, search, premium) {
  if (!category && !level && !premium && !search) {
    return axios.get(
      "https://api.academy-skillhub.com/v1/courses"
    );
  }
  return axios.get(
    `https://api.academy-skillhub.com/v1/courses?categoryId=${category}&level=${level}&premium=${premium}&search=${search}`
  );
}

export function useCoursesData(category, level, search, premium) {
  return useQuery(
    ["courses", category, level, search, premium],
    () => coursesQueries(category, level, search, premium),
    {
      select: (data) => {
        return data.data.data;
      },
    }
  );
}

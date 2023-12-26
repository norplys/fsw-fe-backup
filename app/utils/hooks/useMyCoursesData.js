import { useQuery } from "react-query";
import axios from "axios";

function myCoursesQueries(category, level, search, progress, token) {
  if (!category && !level && !progress && !search) {
    return axios.get(
      "https://final-project-online-course.et.r.appspot.com/v1/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  return axios.get(
    `https://final-project-online-course.et.r.appspot.com/v1/courses?categoryId=${category}&level=${level}&progress=${progress}&search=${search}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
  );
}

export function useMyCourses(category, level, search, progress, token) {
  return useQuery(
    ["my-courses", category, level, search, progress, token],
    () => myCoursesQueries(category, level, search, progress, token),
    {
      select: (data) => {
        return data.data.data;
      },
    }
  );
}

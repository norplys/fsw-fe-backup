import { useQuery } from "react-query";
import axios from "axios";

function myCoursesQueries(category, level, search, isComplete, token) {
  if (!category && !level && !isComplete && !search) {
    return axios.get(
      "https://api.academy-skillhub.com/v1/courses/my-courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  return axios.get(
    `https://api.academy-skillhub.com/v1/courses/my-courses?categoryId=${category}&level=${level}&isComplete=${isComplete}&search=${search}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
  );
}

export function useMyCourses(category, level, search, isComplete, token) {
  return useQuery(
    ["my-courses", category, level, search, isComplete, token],
    () => myCoursesQueries(category, level, search, isComplete, token),
    {
      select: (data) => {
        return data.data.data;
      },
    }
  );
}

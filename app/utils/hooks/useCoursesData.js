import { useQuery } from "react-query";
import axios from "axios";

function coursesQueries(category, level) {
  console.log("category", category);
  console.log("level", level);
  if (!category && !level) {
    return axios.get(
      "https://final-project-online-course.et.r.appspot.com/v1/courses"
    );
  }
  return axios.get(
    `https://final-project-online-course.et.r.appspot.com/v1/courses?categoryId=${category}&level=${level}`
  );
}

export function useCoursesData(category, level) {
  return useQuery(
    ["courses", category, level],
    () => coursesQueries(category, level),
    {
      select: (data) => {
        return data.data.data;
      },
    }
  );
}

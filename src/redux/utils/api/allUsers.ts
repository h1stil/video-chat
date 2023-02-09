import axios from "../core/axios";

export default {
  getAll: () =>
    axios.get("https://localhost:5000/users", {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwucnUiLCJpZCI6MTEsInJvbGVzIjpbeyJpZCI6MSwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW5pc3RyYXRvciIsImNyZWF0ZWRBdCI6IjIwMjMtMDItMDRUMTA6MTI6NTQuNTQyWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDItMDRUMTA6MTI6NTQuNTQyWiIsIlVzZXJSb2xlcyI6eyJpZCI6Niwicm9sZUlkIjoxLCJ1c2VySWQiOjExfX1dLCJpYXQiOjE2NzU5NjkzOTcsImV4cCI6MTY3NjA1NTc5N30.86x_I7KF8YhD3oz6lnXsdg4bSeMUW4cm51-ump5yfsI",
      },
    }),
};

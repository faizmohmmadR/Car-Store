import React from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
async function getPosts() {
  const { data } = await axios.get("http://localhost:8000/api/user/");
  return data;
}
function Users() {
  const deletePost = useMutation((id) => {
    return axios.delete(`http://localhost:8000/api/user/${id}`);
  });
  const { isLoading, isError, error, data } = useQuery(["posts"], getPosts);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <ul className="list-group">
      {data.map((res, i) => {
        return (
          <li className="list-group-item mb-4" key={i}>
            <h3>{res.title}</h3>
            <p className="mb-3">{res.body}</p>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => deletePost.mutate(res.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default Users;

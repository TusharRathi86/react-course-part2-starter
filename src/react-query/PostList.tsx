import React from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

  if (isLoading) return <p>LOADING.....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group mb-4">
        {posts.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-outline-primary my-3 ms-1"
      >
        {" "}
        {isFetchingNextPage ? "Loading..." : "Load More"}{" "}
      </button>
    </>
  );
};

export default PostList;

/* A query object is an object that contains all the values for quering the set of objects. */

/* Filtering by user!!

import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>LOADING.....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1"> User 1 </option>
        <option value="2"> User 2 </option>
        <option value="3"> User 3 </option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={setPage(page - 1)}
        className="btn btn-outline-danger my-3"
      >
        {" "}
        Previous{" "}
      </button>
      <button
        onClick={setPage(page + 1)}
        className="btn btn-outline-primary my-3 ms-1"
      >
        {" "}
        Next{" "}
      </button>
    </>
  );
};

export default PostList;
*/

/* Query Pagination 

import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>LOADING.....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group mb-4">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-outline-danger my-3"
      >
        {" "}
        Previous{" "}
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-outline-primary my-3 ms-1"
      >
        {" "}
        Next{" "}
      </button>
    </>
  );
};

export default PostList;

*/

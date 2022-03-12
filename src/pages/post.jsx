import React, { useEffect, useState } from "react";


import { usePosts } from "../hooks/usePost"
import { PostFilter } from "../components/PostFilter/PostFilter";
import { PostForm } from "../components/PostForm/PostForm";
import { PostList } from "../components/PostList/PostList";
import { MyButton } from "../components/UI/button/MyButton";

import { MyModal } from "../components/UI/modal/MyModal";

import "../styles.css";
import { PostsService } from "../API/PostsService";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFeching";
import { getPageCount } from "../utils/pages";
import { Pagination } from "../components/UI/pagination/Pagination";

function Posts() {
    
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortesAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostsService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const delPost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div className="App">
      <MyButton
        style={{ marginTop: "30px" }}
        onClick={() => {
          setModal(true);
        }}
      >
        Add customer
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Have a problem with ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList delete={delPost} posts={sortesAndSearchedPosts} />
      )}

      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;

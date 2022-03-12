import { useState } from "react/cjs/react.development";
import { MyButton } from "../UI/button/MyButton";
import { MyInput } from "../UI/input";

export const PostForm = (props) => {
  
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
const newPost = {
  ...post, id:Date.now()
}
    // setPosts([...posts, { ...post, id: Date.now() }]);
    props.create(newPost)
    setPost({ title: "", body: "" });
  };

  
  return (
    <div>
      <form action="">
        <MyInput
          type="text"
          placeholder="Name"
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
        />

        <MyInput
          type="text"
          placeholder="Description"
          value={post.body}
          onChange={(event) => setPost({ ...post, body: event.target.value })}
        />
        <MyButton onClick={addNewPost} title="Add">
          Add
        </MyButton>
      </form>
      
    </div>
  );
};

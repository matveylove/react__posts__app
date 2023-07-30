import { useState } from "react";

// Components
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
const PostForm = ({ create }) => {
  // Состояние поста
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  // Добавление поста
  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <MyInput
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        type="text"
        placeholder="Описание поста"
        value={post.body}
      />
      <MyButton onClick={addNewPost}>Добавить пост</MyButton>
    </form>
  );
};

export default PostForm;

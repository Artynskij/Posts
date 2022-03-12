import { MyButton } from "../UI/button/MyButton";
import styles from "./styles.module.css";

export const PostItem = (props) => {

  

  return (
    <div  className={styles.post}>
      <div className={styles.postContent}>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className={styles.postBtn}>
        <MyButton onClick={() => props.delete(props.post)}>Del Post</MyButton>
      </div>
    </div>
  );
};

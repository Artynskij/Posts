import { TransitionGroup,CSSTransition } from "react-transition-group";
import { PostItem } from "../PostItem/PostItem";

export const PostList = (props) => {
  if (props.posts.length === 0) {
    return <h1 style={{ textAlign: "center" }}>У вас нету постов</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Список постов</h1>
      <TransitionGroup>
        {props.posts.map((i, index) => {
          return (
            <CSSTransition key={i.id} timeout={500} classNames="post">
              <PostItem
                post={i}
                delete={props.delete}
                number={index + 1}
                
                title={i.title}
                body={i.body}
              />
            
            </CSSTransition>
          );
        })}
        
      </TransitionGroup>
    </div>
  );
};

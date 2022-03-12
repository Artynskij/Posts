import cl from "./MyModal.module.css";

export const MyModal = ({ children, visible, setVisible }) => {
const rootClasses = [cl.myModal]
if (visible) {
    rootClasses.push(cl.active)
}

  return (
    <div className={rootClasses.join(" ")} onClick={() => {setVisible(false)}}>
      <div onClick={(e) => {e.stopPropagation()}} className={cl.myModalContent}>{children}</div>
    </div>
  );
};

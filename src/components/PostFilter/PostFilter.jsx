import { MyInput } from "../UI/input";
import { MySelect } from "../UI/select";

export const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        placeholder=""
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        dafaultValue="сортировка"
        option={[
          { value: "title", name: "по названию" },
          { value: "body", name: "по описанию" },
        ]}
      />
    </div>
  );
};

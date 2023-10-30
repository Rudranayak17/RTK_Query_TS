import { FormEvent, useState } from "react";
import PostCard from "./cmponents/PostCard";
import { useGetPostQuery, useNewPostMutation } from "./redux/api";

const App = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetPostQuery("");
  console.log(isLoading, isError, isSuccess, data, error);
 const [newPost]= useNewPostMutation()
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

const submitHandler=(e:FormEvent<HTMLFormElement>):void=>{
e.preventDefault();
const post:postType={
  title,body,
  userId:Math.random()*1000,
  id:Math.random()*1000,

}
newPost(post);
setTitle("");
setBody("")
}

  return (
    <div>
      <h1>my post</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
        />
        <button type="submit">Add</button>
      </form>

      {isLoading ? (
        <div>Loding</div>
      ) : (
        data?.map((i) => <PostCard key={i.id} title={i.title} body={i.body} />)
      )}
    </div>
  );
};
export default App;

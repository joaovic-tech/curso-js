import { useParams } from "react-router-dom";
import { postsData, type IPost } from "./post-data";

export const Post = () => {
  const { id } = useParams();
  const post: IPost | undefined = postsData.find(
    (post) => post.id === Number(id)
  );

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.description}</p>
    </div>
  );
};

import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import "./style.css";
import { postsData } from "./post-data";

export const Posts = () => {
  const { id } = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`Para: ${id}`} {`QS: ${qs.get("page")}`}
      </h1>

      <Outlet />
      {!id && (
        <ul className="posts">
          {postsData.map((post) => (
            <li className="post" key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

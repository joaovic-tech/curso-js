import { useParams, useSearchParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`Para: ${id}`} {`QS: ${qs.get("page")}`}
      </h1>
    </div>
  );
};

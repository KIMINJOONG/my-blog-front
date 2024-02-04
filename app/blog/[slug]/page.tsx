import { IPost } from "@/types/model";
import BlogContent from "./BlogContent";
import { ILoadPostsResponse } from "@/types/response";

const limit = 3;

async function fetchLoadData() {
  const res: Response = await fetch(
    `http://localhost:4000/posts?limit=${limit}&page=0`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

async function fetchData(slug: string) {
  const res = await fetch(`http://localhost:4000/posts/${slug}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { post }: { post: IPost } = await fetchData(params.slug);

  return { title: post?.title, description: post?.content };
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const data: IPost = await fetchData(params.slug);
  const postsData: ILoadPostsResponse = await fetchLoadData();
  return (
    <>
      <BlogContent post={data} posts={postsData.posts} />
    </>
  );
};

export default Page;

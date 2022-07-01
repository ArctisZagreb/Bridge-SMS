import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getNewsByTitle } from "../../DB/NEWSARTICLES";
import { NEWSARTICLES } from "../../DB/NEWSARTICLES";
import { IArticleElement, INewsArticles } from "../../DB/NEWSARTICLES";

interface INewsArticle {
  dataProps: INewsArticles;
}

const NewsArticle: React.FC<INewsArticle> = ({ dataProps }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>LOADING...</div>;
  }

  return (
    <div>
      <h1>{dataProps.title}</h1>
      {dataProps.articleElements.map((element: IArticleElement) => {
        if (element.elementType === "text") {
          return <p>{element.content}</p>;
        }
      })}
    </div>
  );
};
export default NewsArticle;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params === undefined) return { props: {}, notFound: true };
  if (typeof params.newsId !== "string") return { props: {} };
  const newsData: INewsArticles = getNewsByTitle(params.newsId);
  return {
    props: { dataProps: newsData },
  };
};

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = [...NEWSARTICLES];
  return {
    paths: posts.map((post) => ({ params: { newsId: post.title } })),
    fallback: true,
  };
};

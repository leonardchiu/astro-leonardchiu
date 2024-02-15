import React from "react";

export function Post(props) {
  const { title, content, image } = props;
  return (
    <article className="w-1 mb-10 flex flex-col items-center pt-20">
      <h1 className="text-8xl font-black text-white mb-8">{title}</h1>
      <img src={image} alt={title} className="w-1/2 mb-8" />
      <div
        className="text-xl mt-4 max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
export default Post;

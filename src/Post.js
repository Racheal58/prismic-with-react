import React from "react";

import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";

function Post() {
  const [document] = useSinglePrismicDocument("post");
  console.log("post", document);

  // console.log("here", document)  document.data.title

  return (
    <>
      {document && (
        <div>
          <PrismicRichText field={document.data.page_title} />
          <PrismicRichText field={document.data.post_text} />
          <img src={document.data.post_image.url} />
        </div>
      )}

      {document && (
        <div>
          <PrismicRichText field={document.data.profile[0].profile_heading} />
          <PrismicRichText field={document.data.profile[0].profile_body} />
          <img src={document.data.profile[0].profile_image.url} />
          <p>{document.data.profile[0].first_publication_date}</p>
        </div>
      )}
    </>
  );
}

export default Post;

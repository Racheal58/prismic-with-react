import React from "react";

import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";

function Post() {
  const [document] = useSinglePrismicDocument("post");
  console.log("post", document);

  // console.log("here", document)  alt={document.data.profile[0].profile_image.alt}

  return (
    <>
      {document && (
        <div>
          <PrismicRichText field={document.data.page_title} />
          <PrismicRichText field={document.data.post_text} />
          <img
            src={document.data.post_image.url}
            alt={document.data.post_image.alt}
          />
        </div>
      )}

      {document && (
        <div>
          <PrismicRichText field={document.data.profile[0].profile_heading} />
          <PrismicRichText field={document.data.profile[0].profile_body} />
          <img
            src={document.data.profile[0].profile_image.url}
            alt={document.data.profile[0].profile_image.alt}
          />
          <p>{document.data.profile[0].first_publication_date}</p>
        </div>
      )}
    </>
  );
}

export default Post;

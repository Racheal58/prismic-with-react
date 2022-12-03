import React from "react";
import { useParams } from "react-router-dom";

import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";

function Post() {
  const { uid } = useParams();

  const [document] = usePrismicDocumentByUID("post", uid);

  return (
    <>
      <p>{uid}</p>
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

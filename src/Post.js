import React from "react";
import { useParams } from "react-router-dom";

import {
  PrismicImage,
  PrismicRichText,
  PrismicText,
  usePrismicDocumentByUID,
} from "@prismicio/react";

function Post() {
  const { uid } = useParams();

  const [document] = usePrismicDocumentByUID("post", uid);

  return (
    <>
      {document && (
        <>
          {document.data.post.map((post_item, index) => (
            <div className="flex flex-col justify-center mt-10" key={index}>
              <div className="w-7/12 flex border border-slate-300 p-4 rounded-lg mx-auto mt-9">
                <div>
                  <PrismicImage field={post_item.post_image} className="w-72" />
                </div>

                <div className="col-span-3 p-6">
                  <PrismicRichText field={post_item.post_body} />
                  <br />
                  <PrismicText
                    field={post_item.post_heading}
                    className="text-xl"
                  />
                  <br />
                  <p>{post_item.first_publication_date}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Post;

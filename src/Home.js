import React from "react";

import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";

function Home() {
  const [document] = useSinglePrismicDocument("home_page");
  console.log("dfd68", document);

  // console.log("here", document)

  return (
    <>
      <div>baby melie</div>
      {document && (
        <div>
          <PrismicRichText field={document.data.title} />
          <img
            src={document.data.title_image.url}
            alt={document.data.title_image.alt}
          />
        </div>
      )}
    </>
  );
}

export default Home;

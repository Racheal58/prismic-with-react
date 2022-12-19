import React from "react";

import {
  PrismicImage,
  PrismicRichText,
  PrismicText,
  useSinglePrismicDocument,
} from "@prismicio/react";

function Home() {
  const [document] = useSinglePrismicDocument("home_page");

  // I know how to use the asImageWidthSrcSet function now but I don't think it is needed anymore :(
  // const image = prismicH.asImageWidthSrcSet(
  //   document && document.data.title_image
  // );

  // <img
  //   src={image.src}
  //   srcSet={image.srcset}
  //   alt={document.data.title_image.alt}
  // />

  return (
    <>
      {document && (
        <>
          <div className="flex justify-center">
            <div
              className="w-7/12 bg-center relative flex items-center justify-center"
              style={{
                backgroundImage: "url(" + document.data.title_image.url + ")",
                height: "630px",
              }}
            >
              <div className="bg-black opacity-80 absolute w-full h-full" />
              <PrismicRichText
                field={document.data.title}
                className="text-4xl font-bold text-white relative z-10"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <div className="grid grid-cols-2 gap-10 w-7/12">
              {document.data.card_list.map((card_item, index) => (
                <div key={index} className="border border-black p-4">
                  <div className="flex justify-center">
                    <PrismicImage
                      field={card_item.card_image}
                      className="w-72"
                    />
                  </div>
                  <PrismicRichText
                    className="mt-4"
                    field={card_item.card_text}
                  />
                  <PrismicText
                    className="mt-4 flex justify-center text-xl"
                    field={card_item.card_title}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;

import React from "react";
import { usePrismicPreviewResolver } from "@prismicio/react";
import { useNavigate } from "react-router-dom";

function Preview() {
  const navigate = useNavigate();

  const [previewURL, previewState] = usePrismicPreviewResolver({ navigate });

  React.useEffect(() => {
    if (previewState.state === "failed") {
      return console.warn(
        `Unable to resolve a preview from the current URL.\nCheck https://prismic.io/docs/reactjs/beyond-the-api/in-website-preview for more info`
      );
    }
  }, [previewURL]);

  return <p>loading...</p>;
}

export default Preview;

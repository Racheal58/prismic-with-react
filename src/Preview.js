import { usePrismicPreviewResolver } from "@prismicio/react";
import { useNavigate } from "react-router-dom";

function Preview() {
  const navigate = useNavigate();

  // This performs a client-side redirect to the previewed document's URL
  usePrismicPreviewResolver({ navigate });
}

export default Preview;

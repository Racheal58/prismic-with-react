import React from "react";

import { PrismicRichText, useFirstPrismicDocument } from "@prismicio/react";

function App() {
  const [document] = useFirstPrismicDocument();
  console.log("dfd",document)

  return (
    <div>
      {document && <PrismicRichText field={document.data.example_rich_text} />}
    </div>
  );
}

export default App;

"use client";

import SearchHeader from "./SearchHeader";
import searchImages from "./Api.js";
import { useState } from "react";
import ImageList from "./ImageList.js";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
    console.log(images);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </div>
  );
}

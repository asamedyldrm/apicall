import ImageItem from "./ImageItem";

export default function ImageList({ imagesPlaceHolder }) {
  return (
    <div className="grid grid-cols-4 max-sm:grid-cols-2">
      {imagesPlaceHolder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

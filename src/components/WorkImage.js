import { useEffect, useState } from "react";
import LoaderDots from "./LoaderDots";

function WorkImage({ src, alt }) {
  const [loading, setLoading] = useState(true);
  const picture = new Image();
  picture.src = src;
  picture.alt = alt;
  console.log(picture);
  useEffect(() => {
    picture.onload = () => setLoading(false);
  });
  return loading ? (
    <LoaderDots />
  ) : (
    <img src={src} alt={alt} loading="lazy"></img>
  );
}

export default WorkImage;

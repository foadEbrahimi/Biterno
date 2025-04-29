import React from "react";

const OptimizedImage = ({ src, alt, className, width, height, ...props }) => {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, ".webp");

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt || "Image"}
        className={className}
        width={width}
        height={height}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;

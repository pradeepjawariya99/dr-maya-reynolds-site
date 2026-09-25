"use client";
import { useState } from "react";

/**
 * Image with a soft sea-glass placeholder, so the layout still looks right
 * while you're adding photos to /public/images.
 */
export default function Photo({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-secondary to-secondary-soft ${className}`}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {failed && (
        <span className="absolute inset-x-0 bottom-0 p-3 text-xs text-primary/60">Add photo: {src}</span>
      )}
    </div>
  );
}

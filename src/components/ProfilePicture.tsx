"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfilePictureProps {
  src: string;
  name: string;
}

/**
 * Renders the profile photo from `/public` and falls back to an initials
 * tile when the file is missing — so the page never shows a broken image.
 * Adding `/profile.jpg` to the public folder activates the photo automatically.
 */
export default function ProfilePicture({ src, name }: ProfilePictureProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0))
      .filter(Boolean)
      .slice(0, 2)
      .join("");

    return (
      <div className="flex h-64 w-64 items-center justify-center rounded-3xl border border-white/10 bg-surface sm:h-72 sm:w-72 lg:h-80 lg:w-80">
        <span aria-hidden className="text-6xl font-bold tracking-tight text-lime-400/70 sm:text-7xl">
          {initials}
        </span>
        <span className="sr-only">{name}</span>
      </div>
    );
  }

  return (
    <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-white/10 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
      <Image
        src={src}
        alt={`Photo of ${name}`}
        fill
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 256px"
        className="object-cover"
        onError={() => setImageFailed(true)}
        priority
      />
    </div>
  );
}

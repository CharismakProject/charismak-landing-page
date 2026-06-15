"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  images: string[];
  videos: string[];
};

export default function ProjectMediaGallery({
  title,
  images,
  videos,
}: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // REMOVE EMPTY ITEMS
  const validImages = images.filter(
    (img) => img && img.trim() !== ""
  );

  const validVideos = videos.filter(
    (video) => video && video.trim() !== ""
  );

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* VIDEOS */}
        {validVideos.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0D3B66] mb-8">
              Project Videos
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {validVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-black overflow-hidden"
                >
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IMAGES */}
        {validImages.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-[#0D3B66] mb-8">
              Project Gallery
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {validImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden bg-[#0D3B66]"
                >
                  <Image
                    src={image}
                    alt={`${title} image ${index + 1}`}
                    width={1200}
                    height={900}
                    className="w-full h-auto object-contain transition duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <span className="text-white font-semibold tracking-[0.2em] text-sm">
                      VIEW IMAGE
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <Image
              src={selectedImage}
              alt="Preview"
              width={1800}
              height={1400}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
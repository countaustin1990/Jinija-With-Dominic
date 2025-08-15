// components/YouTubeVideo.tsx
import React from "react";

type YouTubeVideoProps = {
  url: string; https://youtu.be/8vveFfMuhKM?si=SB-KkXpt9As4eH3l; // YouTube video URL
  title?: string;
};

// Extracts YouTube video ID from various URL formats
const getYouTubeId = (url: string): string | null => {
  // Matches "v=" query, "youtu.be/" or "embed/"
  const regex =
    /(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ url, title }) => {
  const videoId = getYouTubeId(url);

  if (!videoId)
    return <p className="text-red-500 text-center">Invalid YouTube URL</p>;

  return (
    <div className="w-full max-w-3xl mx-auto my-6 rounded-lg overflow-hidden shadow-lg">
      <iframe
        className="w-full h-64 md:h-96"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {title && (
        <div className="p-4 bg-white">
          <h3 className="font-semibold text-lg text-center">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideo;

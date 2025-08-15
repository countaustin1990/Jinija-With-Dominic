// components/YouTubeVideo.tsx
//import React from "react";

//import React from 'react';

// Define the props for the component
type YouTubeVideoProps = {
  url: string; // The full YouTube video URL
  title?: string; // Optional title for the video (used for accessibility)
  className?: string; // Optional class name for the container div
};

{/*const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ url, title, className }) => {
  // A regular expression to extract the video ID from various YouTube URL formats
  const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/);

  // If a video ID is found, extract it. Otherwise, videoId will be null.
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  // If we can't find a video ID, don't render anything
  if (!videoId) {
    console.error('Invalid YouTube URL provided:', url);
    return null;
  }*/}

  // Construct the embed URL using the extracted video ID
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  // Default title for accessibility if one is not provided
  const videoTitle = title || 'YouTube video player';

  return (
    <div className={className} style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src={embedUrl}
        title={videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
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

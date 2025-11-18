import { useState } from 'react';

const Gallery = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Video thumbnails with YouTube embed IDs
  const videos = [
    {
      thumbnail: '/assets/UBCON2023-croped.jpg',
      videoId: 'ZkrgHCCjfoQ',
      title: 'UBCON 2023',
      height: '411px'
    },
    {
      thumbnail: '/assets/UBCON2024-croped.jpg',
      videoId: 'VcRr8tL6sC8',
      startTime: 4,
      title: 'UBCON 2024 Trailblazers',
      height: '360px'
    },
    {
      thumbnail: '/assets/ubcon2025-croped.jpg',
      videoId: 'gpt7cBDwMpA',
      title: 'UBCON 2025',
      height: '411px'
    }
  ];

  const playVideo = (index: number) => {
    setPlayingIndex(index);
  };

  const stopVideo = () => {
    setPlayingIndex(null);
  };

  const getEmbedUrl = (videoId: string, startTime?: number) => {
    // Parameters to make it act like a clean video player:
    // - autoplay=1: Start playing immediately
    // - rel=0: Don't show related videos from other channels
    // - modestbranding=1: Minimal YouTube branding
    // - showinfo=0: Hide video title/uploader (deprecated but still helps)
    // - controls=1: Show player controls
    // - fs=1: Allow fullscreen
    const baseParams = 'autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1';
    const timeParam = startTime ? `&start=${startTime}` : '';
    return `https://www.youtube.com/embed/${videoId}?${baseParams}${timeParam}`;
  };

  return (
    <section className="gallery-section">
      <h2>Past UBCONs</h2>
      
      <div className="gallery-grid gallery-video-grid">
        {videos.map((video, index) => (
          <div 
            key={index} 
            className="gallery-video-item"
            style={{ height: video.height }}
          >
            {playingIndex === index ? (
              <div className="gallery-video-player">
                <iframe
                  src={getEmbedUrl(video.videoId, video.startTime)}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="gallery-video-iframe"
                ></iframe>
                <button 
                  onClick={stopVideo}
                  className="video-back-button"
                  type="button"
                  title="Back to thumbnail"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => playVideo(index)}
                className="gallery-video-button"
                type="button"
              >
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-play-overlay">
                  <svg className="play-icon" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                  </svg>
                </div>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;


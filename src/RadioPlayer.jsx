import React, { useRef, useState, useEffect } from 'react';

const RadioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('https://on.soundcloud.com/6AiPfvQvCixLQJsj9');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const streamUrl = 'https://radio.onebeat.party/stream';

  console.log('RadioPlayer rendered'); // Debug log

  const togglePlay = () => {
    console.log('Toggle play clicked'); // Debug log
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => {
        setError("Unable to play the stream. Please try again later.");
        console.error("Error playing stream:", e);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    console.log('useEffect called'); // Debug log
    const fetchTrack = async () => {
      try {
        setIsLoading(true);
        // Simulating API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Set the current track to the SoundCloud link
        setCurrentTrack('https://on.soundcloud.com/6AiPfvQvCixLQJsj9');
        setError(null);
      } catch (error) {
        console.error('Error fetching current track:', error);
        setError("Unable to fetch track information. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    const intervalId = setInterval(fetchTrack, 30000); // Fetch every 30 seconds
    fetchTrack(); // Fetch immediately on mount

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="radio-player">
      <audio ref={audioRef} src={streamUrl} />
      <button onClick={togglePlay} className="play-button" disabled={isLoading || error}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="current-track">
        {isLoading ? (
          'Loading...'
        ) : error ? (
          <span className="error-message">{error}</span>
        ) : (
          <>
            Now Playing: <a href={currentTrack} target="_blank" rel="noopener noreferrer">Listen on SoundCloud</a>
          </>
        )}
      </div>
    </div>
  );
};

export default RadioPlayer;
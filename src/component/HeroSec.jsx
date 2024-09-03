import { useState, useRef } from 'react';
import bgvideo from '../../public/video.mp4';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Make sure to install react-icons if not already

const Herosec = () => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!videoRef.current.muted);
    }
  };

  return (
    <> 
      <div className='relative'>
        <div className='w-full'>
          <video
            src={bgvideo}
            autoPlay
            loop
            ref={videoRef}
            className='w-screen h-[60vh] md:h-[80vh] lg:h-screen object-cover'
          ></video>
          <button
            onClick={handleToggleMute}
            className='absolute bottom-4 right-4 p-2 sm:p-4 bg-white rounded-full shadow-lg flex items-center justify-center'
          >
            {isMuted ? (
              <FaVolumeMute className='text-gray-800' />
            ) : (
              <FaVolumeUp className='text-gray-800' />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Herosec;
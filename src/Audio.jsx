import React, { useRef } from 'react';
import tune from './image/Notification.mp3';

const Audio = () => {
    const audioRef = useRef(null); // Create a ref for the audio element
    return (
        <div>
            <audio
                autoPlay
                onError={(e) => console.error("Audio Error:", e)}
                ref={audioRef} // Attach the ref to the audio element
            >
                <source src={tune} type="audio/mpeg" />

            </audio>

        </div>
    );
}

export default Audio;

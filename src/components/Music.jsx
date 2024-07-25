import React from 'react';
import '../App.css';

const Music = () => {
    return (
        <div id="spotifyWidget">
          <iframe 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
            title="Spotify Playlist"
          ></iframe>
        </div>
      );
}

export default Music

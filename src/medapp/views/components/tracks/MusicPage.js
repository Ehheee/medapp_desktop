import React, {useState} from 'react';
import LocalTrackList from './LocalTrackList';
import YoutubeSection from './YoutubeSection';

const MusicPage = () => {
    return (<div>
                <YoutubeSection></YoutubeSection>
                <LocalTrackList></LocalTrackList>
            </div>);
};

export default MusicPage;
import React, { useState } from 'react';
import { Modal, Button } from 'react-native';
import { ModalContent, ButtonWrapper, YoutubePlayerWrapper} from './styles'
import YoutubePlayer from 'react-native-youtube-iframe'; 
import { StatusBar } from 'react-native';

export const ModalVideo = ({ visible, onClose, videoId }) => {
    const [play, setPlay] = useState(false);

    const togglePlaying = () => {
      setPlay(!play);
    };
  
    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
      >
        <StatusBar style="light" backgroundColor='rgba(0, 0, 0, 0.7)'/>
        <ModalContent>
          <YoutubePlayerWrapper>
            <YoutubePlayer
              height={300}
              mute
              play={play}
              videoId={videoId}
            />
          </YoutubePlayerWrapper>
          <ButtonWrapper>
            <Button title={play ? "Pause" : "Play"} onPress={togglePlaying} />
            <Button title="Close" onPress={onClose} />
          </ButtonWrapper>
        </ModalContent>
      </Modal>
    );
}

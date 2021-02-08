import { ImageType, WithChildrenType } from '@components/common-types';
import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Inner, Overlay, Button } from './styles/player';

const defaultContextValue = {
  showPlayer: false,
  setShowPlayer: (set: (showPlayer: boolean) => boolean) => {},
};
export const PlayerContext = createContext(defaultContextValue);

const Player = ({ children, ...rest }: WithChildrenType) => {
  const [showPlayer, setShowPlayer] = useState(defaultContextValue.showPlayer);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...rest}>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Video = ({ src, ...rest }: ImageType) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  console.log('show player', showPlayer);

  if (showPlayer) {
    return ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer((showPlayer) => false)} {...rest}>
        <Inner>
          <video id="netflix-player" controls>
            <source src={src} type="video/mp4" />
          </video>
        </Inner>
      </Overlay>,
      document.body
    );
  }

  return null;
};

Player.Button = ({ ...rest }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play
    </Button>
  );
};

export default Player;

import React, { useEffect, useState, useContext } from 'react';
import { NetflixContentType, NetflixProfileType } from '@/types';
import { SelectProfilesContainer } from '@/containers';
import { useAuthListener } from '@/hooks';
import { Header, Loading } from '@/components';
import { BROWSE } from '@/constants/routes';
import { Picture } from './../components/loading/styles/loading';
import { FirebaseContext } from '@context/firebase';
import { firebase } from '@lib/firebase.prod';

type SelectionType = {
  title: string;
  data: NetflixContentType[];
};

type BrowseContainerPropsType = {
  slides: {
    series: SelectionType[];
    films: SelectionType[];
  };
};

const BrowseContainer: React.FC<BrowseContainerPropsType> = ({ slides }) => {
  const { user } = useAuthListener();
  const { firebase } = useContext(FirebaseContext);
  const [profile, setProfile] = useState<NetflixProfileType>({
    displayName: null,
    photoURL: null,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  if (profile.displayName !== null) {
    return (
      <>
        {loading ? (
          <Loading src={user?.photoURL ?? ''} />
        ) : (
          <Loading.ReleaseBody />
        )}
        <Header src={'joker1'}>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={BROWSE} alt="Netflix" src="/images/logo.svg" />
              <Header.TextLink active>Series</Header.TextLink>
              <Header.TextLink>Films</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Header.Profile>
                <Header.Picture src={user?.photoURL ?? ''} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user?.photoURL ?? ''} />
                    <Header.TextLink>{user?.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => firebase?.auth().signOut()}>
                      Sign out
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallout>Callout</Header.FeatureCallout>
            <Header.Text>lorem</Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
      </>
    );
  }

  return <SelectProfilesContainer user={user} setProfiles={setProfile} />;
};
export default BrowseContainer;

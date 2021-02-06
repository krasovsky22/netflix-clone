import React, { useEffect, useState } from 'react';
import { NetflixContentType, NetflixProfileType } from '@/types';
import { SelectProfilesContainer } from '@/containers';
import { useAuthListener } from '@/hooks';
import { Header, Loading } from '@/components';

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
  const [profile, setProfile] = useState<NetflixProfileType>({
    displayName: null,
    photoURL: null,
  });
  const [loading, setLoading] = useState(true);

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
          <p>Hello</p>
        </Header>
      </>
    );
  }

  return <SelectProfilesContainer user={user} setProfiles={setProfile} />;
};
export default BrowseContainer;

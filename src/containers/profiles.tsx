import React, { Dispatch, SetStateAction } from "react";
import { Header, Profiles } from "@/components";
import { AuthUserType, NetflixProfileType } from "@/types";
import * as ROUTES from "@constants/routes";

type ProfilesContainerPropsType = {
  user: AuthUserType;
  setProfiles: Dispatch<SetStateAction<NetflixProfileType>>;
};

const SelectProfilesContainer: React.FC<ProfilesContainerPropsType> = ({ user, setProfiles }) => {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item
            onClick={() =>
              setProfiles({
                displayName: user?.displayName ?? null,
                photoURL: user?.photoURL ?? null,
              })
            }
          >
            <Profiles.Picture src={user?.photoURL ?? ""} />
            <Profiles.Name>{user?.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  );
};
export default SelectProfilesContainer;

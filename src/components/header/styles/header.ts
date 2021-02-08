import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export type BackgroundType = {
  src?: string;
};

export const Background = styled.div<BackgroundType>`
  display: flex;
  flex-direction: column;
  ${({ src }) =>
    (src
      ? `background: url(/images/misc/${src}.jpg)`
      : `background: url(/images/misc/home-bg.jpg)`) + "top left / cover no-repeat"};

  @media (max-width: 1100px) {
    background: none;
  }
`;

export const Frame = styled.div``;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1450px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const FeatureCallout = styled.p`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;

export type ActiveLink = {
  active?: boolean;
};
export const Link = styled.p<ActiveLink>`
  color: white;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active = false }) => (active ? "700" : "normal")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &::last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.button<BackgroundType>`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 120px;
  top: 32px;
  right: 0px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &::last-of-type {
      margin-bottom: 0;
    }

    ${Link},${Picture} {
      cursor: default;
    }

    button {
      margin-right: 10px;
    }

    p {
      font-size: 12px;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg : {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

type SearchInputType = {
  active: boolean;
};
export const SearchInput = styled.input<SearchInputType>`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;

  margin-left: ${({ active }) => (active ? "10px;" : "0;")};
  width: ${({ active }) => (active ? "200px;" : "0;")};
  opacity: ${({ active }) => (active ? "1;" : "0;")};
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -04vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.5 ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

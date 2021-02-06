import React from 'react';
import { LockBody, Picture, ReleaseBody, Spinner } from './styles/loading';

type LoadingPropsType = {
  src: string;
};

const Loading = ({ src, ...rest }: LoadingPropsType) => {
  return (
    <Spinner {...rest}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
};

Loading.ReleaseBody = () => {
  return <ReleaseBody />;
};

export default Loading;

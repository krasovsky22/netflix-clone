import React, { createContext, useState, useContext } from 'react';
import { WithChildrenType } from '@components/common-types';
import { Container } from './styles/card';

type FeatureContextType = {
  showFeature: boolean;
  setShowFeature: React.Dispatch<React.SetStateAction<boolean>>;
  itemFeature: object;
  setItemFeature: React.Dispatch<React.SetStateAction<{}>>;
};
export const FeatureContext = createContext<FeatureContextType | undefined>(
  undefined
);

const Card = ({ children, ...rest }: WithChildrenType) => {
  const [showFeature, setShowFeature] = useState<boolean>(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...rest}>{children}</Container>
    </FeatureContext.Provider>
  );
};

export default Card;

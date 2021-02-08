import React, { createContext, useState, useContext, useCallback } from 'react';
import { WithChildrenType } from '@components/common-types';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Meta,
  Entities,
  Item,
  Image,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
} from './styles/card';
import { NetflixContentType } from '@/types';

const DefaultItemFeature: NetflixContentType = {
  docId: '',
  id: '',
  title: '',
  description: '',
  genre: '',
  maturity: 0,
  slug: '',
};

const featureContextDefaultValue = {
  showFeature: false,
  setShowFeature: (showFeature: boolean) => {},
  itemFeature: DefaultItemFeature,
  setItemFeature: (itemFeature: NetflixContentType) => {},
};

export const FeatureContext = createContext(featureContextDefaultValue);

const Card = ({ children, ...rest }: WithChildrenType) => {
  const [showFeature, setShowFeature] = useState(
    featureContextDefaultValue.showFeature
  );
  const [itemFeature, setItemFeature] = useState<NetflixContentType>(
    featureContextDefaultValue.itemFeature
  );

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...rest}>{children}</Container>
    </FeatureContext.Provider>
  );
};

Card.Group = ({ children, ...rest }: WithChildrenType) => {
  return <Group {...rest}>{children}</Group>;
};

Card.Title = ({ children, ...rest }: WithChildrenType) => {
  return <Title {...rest}>{children}</Title>;
};

Card.SubTitle = ({ children, ...rest }: WithChildrenType) => {
  return <SubTitle {...rest}>{children}</SubTitle>;
};

Card.Text = ({ children, ...rest }: WithChildrenType) => {
  return <Text {...rest}>{children}</Text>;
};

type FeatureType = {
  category: string;
};
Card.Feature = ({
  category,
  children,
  ...rest
}: FeatureType & WithChildrenType) => {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  if (showFeature && itemFeature && setShowFeature) {
    return (
      <Feature
        src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
        {...rest}
      >
        <Content>
          <FeatureTitle>{itemFeature.title}</FeatureTitle>
          <FeatureText>{itemFeature.description}</FeatureText>
          <FeatureClose onClick={() => setShowFeature(false)}>
            <img src="/images/icons/close.png" alt="Close" />
          </FeatureClose>

          <Group margin="30px 0" flexDirection="row" alignItems="center">
            <Maturity rating={itemFeature.maturity}>
              {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
            </Maturity>
            <FeatureText fontWeight="bold">
              {itemFeature.genre.charAt(0).toUpperCase() +
                itemFeature.genre.slice(1)}
            </FeatureText>
          </Group>

          {children}
        </Content>
      </Feature>
    );
  }

  return null;
};

Card.FeatureTitle = ({ children, ...rest }: WithChildrenType) => {
  return <FeatureTitle {...rest}>{children}</FeatureTitle>;
};

Card.FeatureText = ({ children, ...rest }: WithChildrenType) => {
  return <FeatureText {...rest}>{children}</FeatureText>;
};

Card.FeatureClose = ({ children, ...rest }: WithChildrenType) => {
  return <FeatureClose {...rest}>{children}</FeatureClose>;
};

// Card.Maturity = ({ children, ...rest }: WithChildrenType) => {
//   return <Maturity {...rest}>{children}</Maturity>;
// };

Card.Meta = ({ children, ...rest }: WithChildrenType) => {
  return <Meta {...rest}>{children}</Meta>;
};

Card.Entities = ({ children, ...rest }: WithChildrenType) => {
  return <Entities {...rest}>{children}</Entities>;
};

Card.Content = ({ children, ...rest }: WithChildrenType) => {
  return <Content {...rest}>{children}</Content>;
};

type ItemPropsType = {
  item: NetflixContentType;
};
Card.Item = ({ item, children, ...rest }: ItemPropsType & WithChildrenType) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  const onItemClick = useCallback(() => {
    setItemFeature && setItemFeature(item);
    setShowFeature && setShowFeature(true);
  }, [item, setItemFeature, setShowFeature]);

  return (
    <Item onClick={onItemClick} {...rest}>
      {children}
    </Item>
  );
};

Card.Image = ({ ...rest }) => {
  return <Image {...rest} />;
};

export default Card;

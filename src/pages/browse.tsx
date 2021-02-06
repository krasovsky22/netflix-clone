import { useContent } from '@/hooks';
import { selectionFilter } from '@/utils';
import React from 'react';

type BrowsePropsType = {};

const Browse: React.FC<BrowsePropsType> = (props) => {
  //we need the series and the films

  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });
  //we need slides
  //pass it to the browse container

  return <div>Browse Component</div>;
};
export default Browse;

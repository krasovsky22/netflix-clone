import { useContent } from "@/hooks";
import { selectionFilter } from "@/utils";
import React from "react";
import { BrowseContainer } from "@/containers";

const Browse: React.FC = () => {
  //we need the series and the films

  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });
  //we need slides
  //pass it to the browse container

  return <BrowseContainer slides={slides} />;
};
export default Browse;

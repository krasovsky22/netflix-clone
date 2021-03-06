import React from "react";
import Jumbotron, { JumbotronPropsType } from "@components/jumbotron";

type JumboDataType = JumbotronPropsType & {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  alt: string;
};

const jumboData: JumboDataType[] = require("@fixtures/jumbo.json");

const JumbotronContainer: React.FC = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};

export default JumbotronContainer;

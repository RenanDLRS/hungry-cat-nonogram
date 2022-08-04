import React from "react";
import { Container } from "./styles";

interface Props {
  children: any;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;

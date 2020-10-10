import React from "react";
import { Container, Title, SubTitle } from "./styles/feature";

export default function Feature({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Feature.SubTitle = function SubFeatureTitle({ children, ...otherProps }) {
  return <SubTitle {...otherProps}>{children}</SubTitle>;
};

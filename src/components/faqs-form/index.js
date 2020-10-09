import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/faqs-form";

export default function FaqsForm({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

FaqsForm.Input = function FaqsFormInput({ ...otherProps }) {
  return <Input {...otherProps} />;
};

FaqsForm.Button = function FaqsFormButtton({ children, ...otherProps }) {
  return (
    <Button {...otherProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  );
};

FaqsForm.Text = function FaqsFormText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

FaqsForm.Break = function FaqsFormBreak({ children, ...otherProps }) {
  return <Break {...otherProps} />;
};

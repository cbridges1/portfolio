import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme-original/CodeBlock";
import Details from "@theme/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";
import { Card, CardGroup } from "../components/Card";

export default {
  ...MDXComponents,
  Details,
  CodeBlock,
  Tabs,
  TabItem,
  Admonition: MDXComponents.admonition,
  DocCardList,
  Card,
  CardGroup,
};

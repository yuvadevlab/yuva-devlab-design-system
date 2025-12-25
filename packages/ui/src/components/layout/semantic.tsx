import React from "react";

import { Box } from "./box/box";
import { BoxProps } from "./box/box.types";

export const Header = React.forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Box
    ref={ref}
    as="header"
    {...props}
  />
));
Header.displayName = "Header";

export const Footer = React.forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Box
    ref={ref}
    as="footer"
    {...props}
  />
));
Footer.displayName = "Footer";

export const Main = React.forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Box
    ref={ref}
    as="main"
    {...props}
  />
));
Main.displayName = "Main";

export const Section = React.forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Box
    ref={ref}
    as="section"
    {...props}
  />
));
Section.displayName = "Section";

export const Article = React.forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Box
    ref={ref}
    as="article"
    {...props}
  />
));
Article.displayName = "Article";

export const Aside = React.forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Box
    ref={ref}
    as="aside"
    {...props}
  />
));
Aside.displayName = "Aside";

export const Nav = React.forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Box
    ref={ref}
    as="nav"
    {...props}
  />
));
Nav.displayName = "Nav";

import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <Container py={8}>{children}</Container>;
};

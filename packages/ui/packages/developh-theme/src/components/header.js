import React from "react";
import tw from "twin.macro";
import { get } from "lodash";
import { connect, styled, css } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import NavIcon from "./nav-icon";
import { useWindow } from "../utils/hooks";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  position: fixed;
  height: 60px;
  top: 0;
  z-index: 100;
  /* color: #fff; */
`;

const StyledNavBar = styled.div`
  ${tw`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between`}
`;

const Title = styled.h2`
  margin: 0;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  ${tw`flex items-center justify-between`}
  margin-right: 5rem;
`;

const Header = ({ state }) => {
  return (
    <>
      <Container css={tw`bg-gray-800`}>
        <StyledNavBar>
          <StyledLink link="/">
            <NavIcon css={tw`w-6 mx-2`} />
            <Title>{state.frontity.title}</Title>
          </StyledLink>
          <Nav />
        </StyledNavBar>
        <MobileMenu />
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

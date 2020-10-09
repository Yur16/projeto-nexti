import React from "react";
import InstagramEmbed from "react-instagram-embed";
import { MdArrowDownward } from "react-icons/md";

import Header from "../Header";
import Posts from "../Posts";
import Banner from "../Banner";
import Footer from "../Footer";

import {
  Container,
  Wrapper,
  Publications,
  LoadButton,
  InstragramPosts
} from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Publications>
          <Banner />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <LoadButton>
            <MdArrowDownward size={25} color="#000" />
          </LoadButton>
        </Publications>

        <InstragramPosts>
          <h2>Nos acompanhe no Instagram</h2>
          <InstagramEmbed
            url="https://www.instagram.com/p/B3amX0JheH-/"
            maxWidth={250}
            hideCaption={false}
            containerTagName="div"
          />
        </InstragramPosts>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Layout;

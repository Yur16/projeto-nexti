import React from "react";

import { Container, Info, Category } from "./styles";

const Posts: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>eventos</span>
      </Category>
      <img
        src="https://lh5.googleusercontent.com/p/AF1QipMfTzWukDU2nDfOJw0W-M5vX5kfMP8eneU7DKCz=w408-h272-k-no"
        alt="fapce"
      />
      <Info>
        <h3>Titulo da publicação</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum
          varius lorem nec sollicitudin. Sed sit amet urna sit amet augue
          accumsan luctus non vel sapien. Maecenas eget suscipit diam, at
          gravida tellus.
        </p>
        <div className="footer">
          <span>Em 03/10 às 13hrs</span>
        </div>
      </Info>
    </Container>
  );
};

export default Posts;

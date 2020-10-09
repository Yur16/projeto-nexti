import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;

  grid-column: 1 / span 3;

  > img {
    flex: 1;
    border-radius: 10px;
    filter: brightness(50%);
  }

  h1 {
    position: absolute;
    bottom: 20px;
    left: 20px;

    color: var(--color-white);
  }
`;

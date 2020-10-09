import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 30px 80px;
  display: grid;
  grid-template-columns: 4fr 2fr;
  column-gap: 30px;
`;

export const Publications = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 50px;
`;

export const InstragramPosts = styled.div`
  > h2 {
    margin-bottom: 20px;
  }
`;

export const LoadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  align-self: center;
  margin: auto;

  cursor: pointer;

  grid-column: 1 / span 3;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: var(--color-footer);

  trasition: background 0.2s;

  > span {
    font-size: 16px;
  }

  &:hover {
    background: var(--color-white);
  }
`;

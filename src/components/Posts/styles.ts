import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;

  max-width: 350px;
  max-height: 450px;

  border: 1px solid var(--color-border);
  border-radius: 8px;

  img {
    width: 100%;
    height: 150px;

    border-radius: 8px 8px 0 0;
  }
`;

export const Category = styled.button`
  background: var(--color-primary);
  padding: 8px;
  border-radius: 15px;

  position: absolute;
  margin: 5px 0 0 5px;

  align-items: center;
  justify-content: center;

  > span {
    font-size: 14px;
    color: var(--color-white);
    font-weight: bold;
  }
`;

export const Info = styled.div`
  padding: 15px;

  > p {
    color: var(--color-gray);
    font-size: 14px;
    margin-top: 10px;
    text-align: justify;
  }

  .footer {
    padding: 10px 0;

    > span {
      font-size: 14px;
      color: var(--color-primary);
      font-weight: bold;
    }
  }
`;

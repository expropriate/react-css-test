import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <Container>
        <STitlte>- Styled-components-</STitlte>
        <SButton>fight</SButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitlte = styled.p`
  margin: 0;
  color: blue;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
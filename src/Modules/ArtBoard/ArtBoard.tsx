import styled from '@emotion/styled';

import placeholder from './tilia-carton-die.svg';

const Container = styled.div``;

export function ArtBoard(): JSX.Element {
  return (
    <Container>
      <img alt="carton die" src={placeholder} />
    </Container>
  );
}

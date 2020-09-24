import styled from 'styled-components';

export const WrapSpinner = styled.div`
width 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
position:fixed;
top: 0;
left: 0;
`;

export const Img = styled.img`
  width: ${(props) => props.width || '32px'};
  height: ${(props) => props.height || '32px'};
`;

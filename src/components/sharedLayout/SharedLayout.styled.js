import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 20px;
  font-size: 38px;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
`;

export const Main = styled.main`
  padding: 20px;
`;

export const Nav = styled.nav`
color:#471CA9;
  display: flex;
  justify-content: space-between;
  & a {
    padding-left: 10px;
    padding-right: 10px;
    text-decoration-line: none;
  }
  & .active {
    color: orange;
  }
`;
export const Backdrop = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.2);
z-index: 10;
  }
`;
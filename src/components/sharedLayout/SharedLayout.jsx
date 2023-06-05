import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaTwitter } from 'react-icons/fa';
import { Header, Main, Nav, Backdrop } from "./SharedLayout.styled";
import { Suspense } from "react";

export default function SharedLayout() {
  return (
    <div>
      <Header>
        <Nav>
          <NavLink to="/">
            <FaHome />Home
          </NavLink>
          <NavLink to="/tweets">
            <FaTwitter />Tweets
          </NavLink>
        </Nav>
      </Header>
      <Main>
      <Suspense fallback="Loading...">
    <Outlet />
  </Suspense>
      </Main>
    </div>
  );
}


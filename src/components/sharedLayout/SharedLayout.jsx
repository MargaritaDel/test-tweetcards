import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaTwitter } from 'react-icons/fa';
import { Header, Main, Nav, Backdrop } from "./SharedLayout.styled";
// import Loader from 'components/Loader';
import { Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";

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
        <Suspense fallback={<Backdrop><ThreeDots  type="ThreeDots" color="#00BFFF" height={80} width={80} /></Backdrop>}>
          <Outlet />
        </Suspense>
      </Main>
    </div>
  );
}


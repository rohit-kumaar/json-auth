import React from "react";
import { useNavigate } from "react-router";

function Profile() {
  let username = sessionStorage.getItem("username");
  username = username.charAt(0).toUpperCase() + username.slice(1);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand ">Hello! {username}</a>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={handleLogout}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Profile;

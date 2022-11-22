import React from "react";
import { useAuth } from "../../../hooks";
import {AdminLogout } from '../AdminLogout'
import "./AdminMenu.css";



export function AdminMenu() {
 
  const {
    user: { role },
  } = useAuth();
  const isAdmin = role === "admin";

  

  

  return (
    <>
      <div className="col hyper-nav">
        <div className="row row-nav">
          <div className="hyper-nav__logo-container">
            <div class="hyper-nav__logo"></div>
            <div
              className="hyper-nav__collapse-btn"
              onclick="hyper_toggleNavigation(this)"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
              >
                <path
                  d="M1 10C0.447715 10 4.82823e-08 10.4477 0 11C-4.82823e-08 11.5523 0.447715 12 1 12L1 10ZM11 12C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10L11 12ZM1 12L11 12L11 10L1 10L1 12Z"
                  fill="#FFF"
                ></path>
                <path
                  d="M1 5C0.447715 5 -4.82822e-08 5.44772 0 6C4.82822e-08 6.55228 0.447715 7 1 7L1 5ZM14 7C14.5523 7 15 6.55228 15 6C15 5.44771 14.5523 5 14 5L14 7ZM1 7L14 7L14 5L1 5L1 7Z"
                  fill="#FFF"
                ></path>
                <path
                  d="M1 0C0.447715 4.82823e-08 -4.82823e-08 0.447715 0 1C4.82823e-08 1.55228 0.447715 2 1 2L1 0ZM7 2C7.55228 2 8 1.55228 8 0.999999C8 0.447715 7.55228 -5.72819e-07 7 -5.24537e-07L7 2ZM1 2L7 2L7 -5.24537e-07L1 0L1 2Z"
                  fill="#FFF"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="nav-link-padding "></div>
        <div className="nav-links__container">
          <a href="/">
            <div class="nav-link ">
              <div class="bar"></div>
              <img
                src="https://cdn-dynamic.talent.com/ajax/img/get-svg.php?icon=home_icon&;size=16&;color=FFFFFF"
                alt="home_icon"
              ></img>
              <span>Home </span>
            </div>
          </a>
          <a href="/dashboard">
            <div class="nav-link ">
              <div class="bar"></div>
              <img src="https://cdn-dynamic.talent.com/ajax/img/get-svg.php?icon=ecg_icon&;size=16&;color=ffffff" alt=""></img>
              <span>Dashboard </span>
            </div>
          </a>
        </div>
        <AdminLogout/>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import useDimensions from "../../hook/useDimensions";
import { Link, useLocation } from "react-router-dom";
import { listMenu } from "./ListMenu";
import "./style.scss";

export default function Drawer() {
  const location = useLocation();
  const [sidebar, setSidebar] = useState("");
  const { width, height } = useDimensions();

  const isActive = (path: string) => {
    return location.pathname === "/" + path ? "is-active" : "";
  };

  useEffect(() => {
    if (window.innerWidth > 1090) {
      setSidebar("");
    } else {
      setSidebar("collapse");
    }
  }, [width]);

  return (
    <nav className={`sidebar ${sidebar}`}>
      <div className="logo-expand">
        <h2>Portfolio</h2>
        <h2>Portfolio</h2>
      </div>
      {listMenu.map((menu, index) => (
        <div className="side-wrapper" key={index}>
          <div className="side-title">{menu.group}</div>
          <div className="side-menu">
            {menu.childGroup.map((childMenu, idxChildMenu) => (
              <Link
                className={`sidebar-link discover animate__animated animate__fadeInUp ${isActive(
                  childMenu.path
                )}`}
                style={{ animationDelay: `0.${idxChildMenu}s` }}
                key={idxChildMenu}
                to={childMenu.path}
                state={{ some: "value" }}
              >
                {childMenu.icon}
                {childMenu.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

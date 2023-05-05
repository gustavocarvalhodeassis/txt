import React, { useState } from "react";
import {
  HiSquares2X2,
  HiDocumentCheck,
  HiBuildingOffice2,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";
import "./style.scss";
import { DashboardPage } from "./dashboard";
import { ArchiveConferencePage } from "./archives_conference";
import { CompaniesPage } from "./companies";
import { ConfigurationPage } from "./configurations";

export const Home = () => {
  let [selectedIndex, setSelectedIndex] = useState(0);

  function toggleDrawerIndex(newIndex) {
    setSelectedIndex((selectedIndex = newIndex));
  }

  function renderHome() {
    switch (selectedIndex) {
      case 0:
        return <DashboardPage />;
      case 1:
        return <ArchiveConferencePage />;
      case 2:
        return <CompaniesPage />;
      case 3:
        return <ConfigurationPage />;
      default:
        return <h1>null</h1>;
    }
  }

  return (
    <div className="home">
      <div className="drawer">
        <div>
          <div className="drawer-logo">
            <div className="drawer-logo-circle" />
            TXT
          </div>
          <ul className="drawer-items">
            <li className={"item"} onClick={() => toggleDrawerIndex(0)}>
              <HiSquares2X2
                className={
                  selectedIndex === 0
                    ? "drawer-item-icon active"
                    : "drawer-item-icon"
                }
                size={24}
              />
              <div className="item-brand">Dashboard</div>
            </li>
            <li className={"item"} onClick={() => toggleDrawerIndex(1)}>
              <HiDocumentCheck
                className={
                  selectedIndex === 1
                    ? "drawer-item-icon active"
                    : "drawer-item-icon"
                }
                size={24}
              />
              <div className="item-brand">Envio de arquivos</div>
            </li>
            <li className={"item"} onClick={() => toggleDrawerIndex(2)}>
              <HiBuildingOffice2
                className={
                  selectedIndex === 2
                    ? "drawer-item-icon active"
                    : "drawer-item-icon"
                }
                size={24}
              />
              <div className="item-brand">Empresas</div>
            </li>
          </ul>
        </div>
        <ul className="drawer-items">
          <li className="item">
            <HiOutlineAdjustmentsHorizontal
              onClick={() => toggleDrawerIndex(3)}
              className={
                selectedIndex === 3
                  ? "drawer-item-icon active"
                  : "drawer-item-icon"
              }
              size={24}
            />
            <div className="item-brand">Configurações</div>
          </li>
        </ul>
      </div>
      <div className="element-index">{renderHome()}</div>
    </div>
  );
};

import React from "react";
import { HiArrowPath } from "react-icons/hi2";
import "./style.scss";

export const ArchiveConferencePage = () => {
  return (
    <div className="archive-conference-page">
      <header className="page-header">
        <h1>Envio de Arquivos fiscais</h1>
        <div className="header-action-icon">
          <HiArrowPath size={30} color="var(--secondary-color)" />
        </div>
      </header>
    </div>
  );
};

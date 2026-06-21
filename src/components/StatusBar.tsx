import React from "react";
import { statusBarItems } from "../data/portfolio";

const StatusBar: React.FC = () => {
  return (
    <div className="statusbar">
      <div className="statusbar-inner">
        <div className="stat">
          <span className="dot pulse" />
          <b>online</b>
        </div>
        {statusBarItems.map((item, i) => (
          <React.Fragment key={item.label}>
            <span className="statusbar-sep">·</span>
            <div className="stat">
              {item.label} <b>{item.value}</b>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;

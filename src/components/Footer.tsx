import React from "react";
import { profile } from "../data/portfolio";

const Footer: React.FC = () => {
  return (
    <footer className="portfolio-footer">
      built by {profile.name} · {profile.location}
    </footer>
  );
};

export default Footer;

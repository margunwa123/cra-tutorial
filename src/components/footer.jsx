import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="bg-dark d-flex justify-content-center p-4">
      <div className="text-light">
        Copyright &copy; Mario Gunawan @{new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-[5vw]">
      <div className="container mx-auto text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Trace AI. Created by Nidheesh
          Vakharia, Daniel Lee, Sabrina Piazza, Ria Maria Mathew, and Maanas
          Kollegal.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

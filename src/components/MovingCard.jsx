import React from "react";

export default function MovingCard({ caseNumber = "", children, className = "", ...props }) {
  return (
    <div className={`moving-card ${className}`} {...props}>
      <h3>Case No: {caseNumber}</h3>
      {children}
    </div>
  );
}

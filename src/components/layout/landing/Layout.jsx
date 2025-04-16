import React from "react";

export default function Layout({ children, className }) {
  return <div className={`w-full ~px-5/40 ${className}`}>{children}</div>;
}

"use client";

export function PrintButton() {
  return <button className="printButton" type="button" onClick={() => window.print()}>PDF / CV olarak kaydet ↗</button>;
}

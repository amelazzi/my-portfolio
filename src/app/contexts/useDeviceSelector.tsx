"use client";

import { useContext } from "react";
import { DeviceContext } from "./device-context";

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDevice must be used within a DeviceProvider");
  }
  return context;
};

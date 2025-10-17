"use client";
import { createContext, useContext, ReactNode } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

type DeviceContextType = {
  isMobile: boolean;
};

export const DeviceContext = createContext<DeviceContextType | undefined>(
  undefined
);

export const DeviceProvider = ({ children }: { children: ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

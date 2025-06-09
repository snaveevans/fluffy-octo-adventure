import React, { createContext, useContext, useState, ReactNode } from "react";

interface NameContextType {
  name: string;
  setName: (name: string) => void;
}

const NameContext = createContext<NameContextType | undefined>(undefined);

interface NameProviderProps {
  children: ReactNode;
  initialName?: string;
}

export const NameProvider: React.FC<NameProviderProps> = ({
  children,
  initialName = "",
}) => {
  const [name, setName] = useState<string>(initialName);

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = (): NameContextType => {
  const context = useContext(NameContext);
  if (context === undefined) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
};

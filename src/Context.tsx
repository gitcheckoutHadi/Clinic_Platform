import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface AppContextType {
  TableData: any[];
  setTableData: Dispatch<SetStateAction<any[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
const UseContext = ({ children }: { children: React.ReactNode }) => {
  const [TableData, setTableData] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ TableData, setTableData }}>
      {children}
    </AppContext.Provider>
  );
};

const AdminContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "AdminContext must be used within a CourseCreatorForumProvider"
    );
  }
  return context;
};

export { UseContext, AppContext, AdminContext };

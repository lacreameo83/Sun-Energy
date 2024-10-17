import { createContext, useState } from "react";
import data from "../data";

export const Globalcontext = createContext(null);

function GlobalContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    SearchOutPut(e.target.value);
  };

  function SearchOutPut(searchTerm) {
    const result = data.filter((el) =>
      el.tittle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (result.length) {
      setFilteredData(result);
      setTimeout(() => {
        setSearch("");
        setFilteredData(data);
      }, 3000);
    } else {
      setFilteredData([]);
    }
  }

  return (
    <Globalcontext.Provider
      value={{
        search,
        handleSearch,
        filteredData,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
}

export default GlobalContextProvider;

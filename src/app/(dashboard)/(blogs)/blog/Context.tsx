"use client";

import { createContext, useContext, useState } from "react";
const initialState = {
  cols: 4,
  setcols(cols: number) {},
};

const Context = createContext(initialState);
const { Provider } = Context;
const useGrid = () => useContext(Context);

export { useGrid };
export default function GridProvider({ children }: any) {
  const [grid, setgrid] = useState(initialState.cols);
  return (
    <Provider
      value={{
        cols: grid,
        setcols: setgrid,
      }}
    >
      {children}
    </Provider>
  );
}

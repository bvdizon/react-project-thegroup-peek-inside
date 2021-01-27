import React, { createContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';

const gsheetID = '1z-rXlasV9g2PerZz8uiVtuCEmY192U0LyJA3oWyo9i8';
const gsheetNum = '10';
const url = `https://spreadsheets.google.com/feeds/list/${gsheetID}/${gsheetNum}/public/values?alt=json`;

export const BroContext = createContext();

export const BroContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [brochures, setBrochures] = useState();

  const getBrochures = async () => {
    setIsLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setBrochures(data.feed.entry);
    setIsLoading(false);
  };

  useEffect(() => {
    getBrochures();
  }, []);

  return (
    <>
      <BroContext.Provider value={{ brochures, isLoading }}>
        {children}
      </BroContext.Provider>
    </>
  );
};

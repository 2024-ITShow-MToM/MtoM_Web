import React, { createContext, useState } from "react";

export const ThinkingContext = createContext();

function ThinkingProvider({ children }) {
  const [grade, setGrade] = useState(null);
  const [category, setCategory] = useState(null);
  const [major, setMajor] = useState(null);

  const saveGrade = (grade) => {
    setGrade(grade);
  }

  const saveMajor = (major) => {
    setMajor(major);
  }

  const saveCategory = (category) => {
    setCategory(category);
  }

  return(
    <ThinkingContext.Provider value={{ grade, saveGrade, major, saveMajor, category, saveCategory }}>
      {children}
    </ThinkingContext.Provider>
  )
}

export default ThinkingProvider;
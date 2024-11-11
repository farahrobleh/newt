import React, { createContext, useState, useContext } from 'react';

const ApplicantContext = createContext();

export const ApplicantProvider = ({ children }) => {
  const [applicants, setApplicants] = useState(() => {
    const savedApplicants = localStorage.getItem('applicants');
    return savedApplicants ? JSON.parse(savedApplicants) : [];
  });

  const addApplicant = (newApplicant) => {
    setApplicants(prevApplicants => {
      const updatedApplicants = [...prevApplicants, newApplicant];
      localStorage.setItem('applicants', JSON.stringify(updatedApplicants));
      return updatedApplicants;
    });
  };

  return (
    <ApplicantContext.Provider value={{ applicants, addApplicant }}>
      {children}
    </ApplicantContext.Provider>
  );
};
export const useApplicants = () => useContext(ApplicantContext);

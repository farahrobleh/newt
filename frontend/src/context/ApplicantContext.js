import React, { createContext, useState, useContext } from 'react';

const ApplicantContext = createContext();

export const ApplicantProvider = ({ children }) => {
  const [applicants, setApplicants] = useState([]);

  const addApplicant = (projectTitle) => {
    const newApplicant = {
      id: Date.now(),
      name: `Applicant ${applicants.length + 1}`,
      email: `applicant${applicants.length + 1}@example.com`,
      projectTitle: projectTitle,
      appliedDate: new Date().toLocaleDateString()
    };
    setApplicants([...applicants, newApplicant]);
  };

  return (
    <ApplicantContext.Provider value={{ applicants, addApplicant }}>
      {children}
    </ApplicantContext.Provider>
  );
};

export const useApplicants = () => useContext(ApplicantContext);
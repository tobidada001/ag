import React, { createContext, useState, useContext } from 'react';

const RegistrationContext = createContext();

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
}

export function RegistrationProvider({ children }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    farmName: '',
    farmingExperience: '',
    profilePicture: null,
    idCard: null,
    farmCertification: null,
  });
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <RegistrationContext.Provider value={{ formData, updateFormData, currentStep, setCurrentStep }}>
      {children}
    </RegistrationContext.Provider>
  );
}


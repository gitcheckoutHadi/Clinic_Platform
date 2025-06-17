// context/RegistrationContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface RegistrationData {
    clinicName: string;
    contactPerson: string;
    email: string;
    phoneNumber: string;
    address: string,
    city: string,
    state: string,
    country: string,
    postalCode: string,
    password: string,

}

interface RegistrationContextProps {
    registrationData: RegistrationData;
    setRegistrationData: (data: Partial<RegistrationData>) => void;
    completedFields: Record<string, string[]>;
    setCompletedFields: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
}

const RegistrationContext = createContext<RegistrationContextProps | undefined>(undefined);

export const RegistrationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [registrationData, setRegistrationDataState] = useState<RegistrationData>({
        clinicName: '',
        contactPerson: '',
        email: '',
        phoneNumber: '',
        address: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        password: ""

    });
    const [completedFields, setCompletedFields] = useState<Record<string, string[]>>({});


    const setRegistrationData = (data: Partial<RegistrationData>) => {
        setRegistrationDataState((prevData) => ({
            ...prevData,
            ...data,
        }));
    };

    return (
        <RegistrationContext.Provider value={{ registrationData, setRegistrationData, completedFields, setCompletedFields }}>
            {children}
        </RegistrationContext.Provider>
    );
};

export const useRegistration = (): RegistrationContextProps => {
    const context = useContext(RegistrationContext);
    if (!context) {
        throw new Error('useRegistration must be used within a RegistrationProvider');
    }
    return context;
};

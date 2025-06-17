export interface SignUpSidebarDataInterface {
    sections: {
        sectionTitle: string;
        fields: string[];
    }[];
}


export const SignUpSidebarData: SignUpSidebarDataInterface = {
    sections: [
        {
            sectionTitle: "Add your information",
            fields: ["Clinic Name", "Contact person", "Email Address", "Phone Number"],
        },
        {
            sectionTitle: "Add your address",
            fields: ["Full clinic address", "City", "State", "Country", "Postal Code", "License Verification",],
        },
        {
            sectionTitle: "Secure Your Account",
            fields: ["Password", "Confirm Password"],
        },
    ],
};
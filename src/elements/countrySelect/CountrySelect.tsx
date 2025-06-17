import "./styles.css";
import React, { useEffect, useState } from "react";
import Select from "react-select";
interface CountryOption {
    value: string;
    label: string;
}

function CountrySelect() {
    const [countries, setCountries] = useState<CountryOption[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);

    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
                setSelectedCountry(data.userSelectValue || null);
            });
    }, []);
    const handleChange = (selectedOption: any) => {
        setSelectedCountry(selectedOption);
    };
    return (
        <Select
            options={countries}
            value={selectedCountry}
            onChange={handleChange}
        />
    );
};
export default CountrySelect
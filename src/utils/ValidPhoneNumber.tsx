import { parsePhoneNumberFromString } from "libphonenumber-js";

/**
 * Validates an international phone number.
 * @param phoneNumber The phone number to validate.
 * @param countryCode (Optional) The country code (e.g., 'US', 'GB').
 * @returns {boolean} Returns true if the phone number is valid, otherwise false.
 */
export const isValidInternationalPhoneNumber = (
  phoneNumber: string
): boolean => {
  if (!phoneNumber) return false;

  try {
    const parsedNumber = parsePhoneNumberFromString(phoneNumber);
    return parsedNumber ? parsedNumber.isValid() : false;
  } catch {
    return false;
  }
};

export const EmailValidation = (email: string) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export const isValidLink = (link: string): boolean => {
  try {
    const url = new URL(link);
    return ["http:", "https:"].includes(url.protocol);
  } catch (e) {
    return false;
  }
};

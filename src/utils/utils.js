export  const formatPhoneNumber = (phoneNumber) => {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const formattedPhoneNumber = cleanedPhoneNumber;
  return formattedPhoneNumber;
};
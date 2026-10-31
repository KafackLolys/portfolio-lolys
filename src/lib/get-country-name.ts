export const getCountryName = (countryCode: string, locale = "fr") => {
  const regionNames = new Intl.DisplayNames([locale], {
    type: "region",
  });

  return regionNames.of(countryCode.toUpperCase()) ?? countryCode;
};
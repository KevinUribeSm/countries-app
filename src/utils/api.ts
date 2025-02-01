import axios from "axios";

export const getCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export const getRegions = async () => {
  try {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    const regions = Array.from(new Set(data.map((country: any) => country.region).filter(Boolean))) as string[]

    return regions;
  } catch (error) {
    console.error("Error fetching regions:", error);
    return [];
  }
};

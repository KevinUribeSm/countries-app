'use client'

import { useEffect, useState } from "react";
import { getCountries, getRegions } from "@/utils/api";
import Modal from "@/components/Modal";
import CountryCard from "@/components/Card";
import CountrySearch from "@/components/TopMenu";
import ChangeViewButton from "@/components/ChangeViewButton";
import { Country, SelectedCountry } from "@/interfaces";

export default function Countries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([])
  const [selectedCountry, setSelectedCountry] = useState<SelectedCountry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCountries, setFilteredCountries] = useState<any[]>([])
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [isGridView, setIsGridView] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setFilteredCountries(data);

      const dataRegions = await getRegions()
      setRegions(dataRegions);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      const filteredByRegion = countries.filter(
        (country) => country.region === selectedRegion
      );
      setFilteredCountries(filteredByRegion);
    } else {
      setFilteredCountries(countries);
    }
  }, [selectedRegion, countries]);

  const handleCardClick = (country: SelectedCountry) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const results = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(results);
  };

  const handleClearFilter = () => {
    setSearchTerm("");
    setSelectedRegion("");
    setFilteredCountries(countries);
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <div className="dark:bg-black min-h-screen p-8">
      <CountrySearch
        value={searchTerm}
        onChange={handleSearchChange}
        onSearch={handleSearch}
        onClearFilter={handleClearFilter}
        regions={regions}
        onSelectRegion={handleRegionChange}
        selectedRegion={selectedRegion}
      />

      <ChangeViewButton isGridView={isGridView} setIsGridView={setIsGridView} />

      <div className={isGridView ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center" : "flex flex-col gap-4"}>
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => {
            const capital = country.capital ? country.capital[0] : "N/A";
            const population = country.population || 0;
            const language: string = country.languages ? Object.values(country.languages)[0] as string : "N/A";
            return (
              <CountryCard
                isGridView={isGridView}
                key={index}
                name={country.name.common}
                flag={country.flags.svg}
                capital={capital}
                population={population}
                languages={language}
                onClick={() => handleCardClick(country)}
              />
            );
          })) : (
          <div>No hay resultados</div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        countryInfo={{
          name: selectedCountry?.name.common ?? 'Sin Nombre',
          flag: selectedCountry?.flags.svg ?? 'Sin Bandera',
          capital: selectedCountry?.capital && selectedCountry.capital[0] ? selectedCountry.capital[0] : "N/A",
          population: selectedCountry?.population || 0,
          languages: selectedCountry?.languages
            ? Object.values(selectedCountry.languages).join(", ")
            : "N/A",
          area: selectedCountry?.area || 0,
          region: selectedCountry?.region || "N/A",
          currencies: selectedCountry?.currencies
            ? (Object.values(selectedCountry?.currencies)[0] as { name: string }).name
            : "N/A",
        }}
      />
    </div>
  );
}

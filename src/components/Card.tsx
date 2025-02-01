import { Languages } from "lucide-react";
import Image from "next/image";

interface Props {
  name: string;
  flag: string;
  capital: string;
  population: number;
  languages: string;
  onClick: () => void;
  isGridView: boolean;
}

const CountryCard = ({ name, flag, capital, population, languages, onClick, isGridView }: Props) => {
  return (
    <div
      onClick={onClick}
      className={
        isGridView
          ? "border rounded-xl shadow-md flex flex-col items-center w-full py-2 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-500"
          : "border rounded-xl shadow-md flex items-center justify-center gap-4 p-4 mx-12 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-500"
      }
    >
      <Image
        src={flag}
        alt={`Bandera de ${name}`}
        width={isGridView ? 120 : 80}
        height={isGridView ? 80 : 50}
        className={isGridView ? "object-cover w-32 h-24 mt-2" : "object-cover w-56 h-36 rounded-md"}
      />
      <div className={isGridView ? "text-center" : "flex flex-col"}>
        <h2 className="text-lg font-semibold dark:text-white">{name}</h2>
        <p className="text-md dark:text-white"><strong>Capital:</strong> {capital}</p>
        <p className="text-md dark:text-white"><strong>Population:</strong> {population.toLocaleString()}</p>
        <p className="text-md dark:text-white"><strong>Languages:</strong> {languages}</p>
      </div>
    </div>
  );
};

export default CountryCard;

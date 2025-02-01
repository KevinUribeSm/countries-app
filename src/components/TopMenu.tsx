import React from 'react';
import ThemeSwitch from './ThemeSwitch';

interface Props {
  value: string;
  onChange: (e: any) => void;
  onSearch: () => void;
  onClearFilter: () => void;
  regions: string[];
  onSelectRegion: (region: string) => void;
  selectedRegion: string;
}

const TopMenu = ({
  value,
  onChange,
  onSearch,
  onClearFilter,
  regions,
  onSelectRegion,
  selectedRegion,
}: Props) => {
  return (
    <div className="mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Buscar país..."
          className="border p-2 rounded w-full md:w-auto"
        />
        <button
          onClick={onSearch}
          className="bg-blue-500 text-white p-2 rounded w-full md:w-auto"
        >
          Buscar
        </button>
        <button
          onClick={onClearFilter}
          className="bg-gray-300 text-black dark:bg-gray-700 dark:text-white p-2 rounded w-full md:w-auto"
        >
          Limpiar filtros
        </button>
        <select
          value={selectedRegion}
          onChange={(e) => onSelectRegion(e.target.value)}
          className="border p-2 bg-slate-100 rounded w-full md:w-auto"
        >
          <option>Todas las regiones</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default TopMenu;

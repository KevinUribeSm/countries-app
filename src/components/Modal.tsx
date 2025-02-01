interface Props {
    isOpen: boolean;
    onClose: () => void;
    countryInfo: {
        name: string;
        flag: string;
        capital: string;
        population: number;
        languages: string;
        area: number;
        region: string;
        currencies: string
    };
}

const Modal = ({ isOpen, onClose, countryInfo }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-slate-200 p-6 rounded-lg w-96 dark:bg-blue-900">
                <h2 className="text-2xl text-gray-700 font-semibold mb-4 dark:text-white">{countryInfo.name}</h2>
                <img
                    src={countryInfo.flag}
                    alt={`Flag of ${countryInfo.name}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 dark:text-white">Capital: {countryInfo.capital}</p>
                <p className="text-gray-700 dark:text-white">Population: {countryInfo.population.toLocaleString()}</p>
                <p className="text-gray-700 dark:text-white">Languages: {countryInfo.languages}</p>
                <p className="text-gray-700 dark:text-white">Area: {countryInfo.area.toLocaleString()} km²</p>
                <p className="text-gray-700 dark:text-white">Region: {countryInfo.region}</p>
                <p className="text-gray-700 dark:text-white">Currency: {countryInfo.currencies}</p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;

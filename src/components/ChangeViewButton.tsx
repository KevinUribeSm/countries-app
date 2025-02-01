import React from 'react';

interface Props {
    isGridView: boolean;
    setIsGridView: (value: boolean) => void
}

const ChangeViewButton = ({ isGridView, setIsGridView }: Props) => {
    return (
        <button
            onClick={() => setIsGridView(!isGridView)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md">
            Cambiar Vista
        </button>
    );
};

export default ChangeViewButton;

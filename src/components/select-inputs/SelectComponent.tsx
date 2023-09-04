import React from 'react';
import Select from 'react-select';

interface SelectComponentProps {
  options: { value: string; label: string }[];
  value: { value: string; label: string } | null;
  onChange: (selectedOption: any) => void;
  placeholder?: string;
  className?: string;
  customStyles?: any;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className,
  customStyles,
}) => {
  const defaultStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#a3a3a3' : '#e0e0e0',
      color: state.isSelected ? '#030303' : '#000000',
      marginRight: '-4px',
      marginTop: '-4px',
      marginBottom: '-4px',
      '&:hover': {
        backgroundColor: '#5d5d5d',
        color: '#000000',
      },
    }),

    control: (provided: any, state: any) => ({
      ...provided,

      backgroundColor: state.isSelected ? '#a3a3a3' : '#e0e0e0',
      color: state.isSelected ? '#030303' : '#000000',
      borderColor: state.isSelected ? 'none' : 'none',
      outline: state.isSelected ? '5px solid#a3a3a3' : '5px solid #a3a3a3',
      marginRight: '20px',
      width: '150px',
      transition: 'background-color 0.3s',
      '&:hover': {
        cursor: 'pointer',
      },
    }),
  };

  const mergedStyles = customStyles ? { ...defaultStyles, ...customStyles } : defaultStyles;

  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      styles={mergedStyles}
    />
  );
};

export default SelectComponent;

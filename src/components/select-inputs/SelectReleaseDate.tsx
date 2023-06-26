import Select, { StylesConfig } from 'react-select';

interface Option {
  value: string;
  label: string;
}

function SelectReleaseDate() {
  const options: Option[] = [
    { value: 'new', label: 'New' },
    { value: 'old', label: 'Old' },
  ];

  const selectStyles: StylesConfig<Option, false> = {
    option: (provided, state) => ({
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
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      color: '#555',
      borderColor: state.isFocused ? 'black' : provided.borderColor,

      '&:hover': {
        borderColor: 'black',
      },
      '&:focus': {
        borderColor: 'black',
      },
    }),
  };

  return (
    <Select
      options={options}
      placeholder='Release Date'
      className='min-w-[10vw]'
      styles={selectStyles}
    />
  );
}

export default SelectReleaseDate;

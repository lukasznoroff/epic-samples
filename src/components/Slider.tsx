interface RangeInputProps {
  value: string;
}

const Slider: React.FC<RangeInputProps> = ({ value }) => {
  return (
    <div className='w-[20%]'>
      <input
        id='default-range'
        type='range'
        value={value}
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
      />
    </div>
  );
};

export default Slider;

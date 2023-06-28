import AudioPlayer from './AudioPlayer';
import GridItems from './GridItems';

import {
  formatOptions,
  genreOptions,
  priceOptions,
  releaseDateOptions,
} from '../components/select-inputs/optionsData';

import SelectComponent from '../components/select-inputs/SelectComponent';

function ProductOptions() {
  return (
    <div className='w-[95vw] mx-auto  px-4 md:flex md:px-8 h-auto flex-col'>
      <h2 className='text-2xl font-medium py-20'>BROWSE ALL SOUNDS</h2>
      <div className='flex  justify-between my-20'>
        <SelectComponent options={formatOptions} placeholder='Select Formats' />
        <SelectComponent options={genreOptions} placeholder='Select Genres' />
        <SelectComponent options={priceOptions} placeholder='Price' />
        <SelectComponent
          options={releaseDateOptions}
          placeholder='Release Date'
        />
        <AudioPlayer />
      </div>
      <GridItems />
    </div>
  );
}

export default ProductOptions;

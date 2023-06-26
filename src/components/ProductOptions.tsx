import AudioPlayer from './AudioPlayer';
import SelectReleaseDate from '../components/select-inputs/SelectReleaseDate';
import SelectFormat from '../components/select-inputs/SelectFormat';
import SelectGenres from '../components/select-inputs/SelectGenres';
import SelectPrice from '../components/select-inputs/SelectPrice';

function ProductOptions() {
  return (
    <div className='w-[95vw] mx-auto  px-4 md:flex md:px-8 h-[40vh] flex-col'>
      <h2 className='text-2xl font-medium py-12'>BROWSE ALL SOUNDS</h2>
      <div className='md:flex w-[100%]  justify-between sm:block'>
        <SelectGenres />
        <SelectFormat />
        <SelectPrice />
        <SelectReleaseDate />
        <AudioPlayer data={[]} />
        {/* <AudioPlayer /> */}
      </div>
    </div>
  );
}

export default ProductOptions;

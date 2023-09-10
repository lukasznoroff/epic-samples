import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { useFetch } from '../hooks/useFetch';
import AudioPlayer from './AudioPlayer';
import GridItems from './GridItems';
import SelectComponent from '../components/select-inputs/SelectComponent';
import { genreOptions, priceOptions } from '../components/select-inputs/optionsData';
import Heading from '../components/ui/typography/Heading';
import Container from './ui/container/Container';
import { addToCart } from '../store/cartSlice';
import CartItemExistsModal from './ui/modals/CartItemExistsModal';
import CartItemAddedModal from './ui/modals/CartItemAddedModal';

interface DataItem {
  id: string;
  name: string;
  fields: {
    genres: string;
    formats: string;
    name: string;
    price: string;
    image: {
      url: string;
    }[];
    audio: {
      url: string;
    }[];
  };
}

function ProductOptions() {
  const { data } = useFetch('https://api.airtable.com/v0/appW9ReVSM8YJzf98/sample_packs/');
  const [selectedGenres, setSelectedGenres] = useState<string>('All');
  const [selectedPriceOption, setSelectedPriceOption] = useState<string>('All');
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);
  const [selectedImageName, setSelectedImageName] = useState('');
  const [isStop, setIsStop] = useState<boolean>(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const isItemExistsModal = useSelector((state: RootState) => state.cart.isItemExistsModal);
  const isItemAddedModalOpen = useSelector((state: RootState) => state.cart.isItemAddedModal);

  const handleCategoryChange = (selectedOption: any) => {
    setSelectedGenres(selectedOption.value);
  };

  const handlePriceChange = (selectedOption: any) => {
    setSelectedPriceOption(selectedOption.value);
  };

  const playAudio = (audioUrl: string) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audio = new Audio(audioUrl);
    setCurrentAudio(audio);
    setIsStop(true);
    audio.play();
  };

  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  };

  if (!isStop) {
    setIsStop((prevIsStop) => !prevIsStop);
  }

  useEffect(() => {
    let filtered = [...data];

    if (selectedGenres !== 'All') {
      filtered = filtered.filter((item: DataItem) => item.fields.genres === selectedGenres);
    }
    if (selectedPriceOption === 'price-low') {
      filtered.sort(
        (a: DataItem, b: DataItem) => parseFloat(a.fields.price) - parseFloat(b.fields.price)
      );
    } else if (selectedPriceOption === 'price-high') {
      filtered.sort(
        (a: DataItem, b: DataItem) => parseFloat(b.fields.price) - parseFloat(a.fields.price)
      );
    }

    setFilteredData(filtered);
  }, [selectedGenres, selectedPriceOption, data]);

  useEffect(() => {
    if (selectedGenres === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item: DataItem) => item.fields.genres === selectedGenres);
      setFilteredData(filtered);
      console.log(filtered);
    }
  }, [selectedGenres, data]);

  const dispatch = useDispatch();
  const addItemToCart = (item: DataItem) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="flex md:flex-row flex-col p-32 mb-1 bg-[#a3a3a3]">
        <div>
          <div className="flex-1">
            {isItemExistsModal && <CartItemExistsModal />}
            {isItemAddedModalOpen && <CartItemAddedModal />}
            <Heading variant="h2">BROWSE ALL SOUNDS</Heading>
            <div className="flex">
              <SelectComponent
                options={genreOptions}
                value={genreOptions.find((option) => option.value === selectedGenres) || null}
                onChange={(selectedOption: any) => {
                  handleCategoryChange(selectedOption);
                }}
                placeholder="Select a Genre"
              />
              <SelectComponent
                options={priceOptions}
                value={priceOptions.find((option) => option.value === selectedPriceOption) || null}
                onChange={(selectedOption) => {
                  handlePriceChange(selectedOption);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-column flex-col mx-auto">
          <AudioPlayer item={selectedImageName} setIsStop={setIsStop} stopAudio={stopAudio} />
        </div>
      </div>
      <Container variant="medium">
        {filteredData.map((item: any) => (
          <div
            className=" max-w-sm  bg-white  rounded-lg group "
            key={item.id}
            onClick={() => {
              setSelectedImageName(item.fields.name);
              playAudio(item.fields.audio[0].url);
            }}
          >
            <div className="w-[100%]    ease-in-out duration-500 cursor-pointer hover:drop-shadow-2xl  hover:saturate-200 hover:translate-y-0.5">
              <img
                className="rounded-t-lg "
                src={item.fields.image[0].url}
                width="100%"
                height="100%"
                alt={item.fields.name}
              />
              <div className="  grid justify-items-end	h-5	mr-[10px]   mt-[-30px]  opacity-0 transform group-hover:-translate-y-2  transition duration-700  opacity-100 ">
                <div className="bg-black rounded-full p-3 p-4   opacity-0   ease-in-out duration-500 group-hover:opacity-100  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="white"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 0 1 0 1.971l-11.54 6.347a1.125 1.125 0 0 1-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 w-full bg-gray-800 border-4 border-r-white rounded-b-lg">
                <p className="font-normal text-gray-700 dark:text-gray-400">{item.fields.name}</p>
                <div className="flex justify-between text-gray-700 dark:text-gray-400 text-sm">
                  <p>Genres</p>
                  <p>{item.fields.genres}</p>
                </div>
                <div className="w-full inline-flex justify-between items-center px-3 py-3 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-pointer">
                  <p>{item.fields.price} Euro</p>
                  <p className='p-2' onClick={() => addItemToCart(item)}>ADD</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <GridItems
          setSelectedImageName={setSelectedImageName}
          setIsStop={setIsStop}
          isStop={isStop}
        />
      </Container>
    </>
  );
}

export default ProductOptions;

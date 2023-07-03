import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import GridItems from './GridItems';
import SelectComponent from '../components/select-inputs/SelectComponent';
import {
  formatOptions,
  genreOptions,
  priceOptions,
  releaseDateOptions,
} from '../components/select-inputs/optionsData';
import Heading from '../components/ui/typography/Heading';
import Container from './ui/container/Container';

function ProductOptions() {
  const [selectedImageName, setSelectedImageName] = React.useState('');
  const [isStop, setIsStop] = useState<boolean>(false);

  return (
    <Container variant="wide">
      <Heading variant="h2">BROWSE ALL SOUNDS</Heading>
      <Container variant="flex">
        <SelectComponent options={formatOptions} placeholder="Select Formats" />
        <SelectComponent options={genreOptions} placeholder="Select Genres" />
        <SelectComponent options={priceOptions} placeholder="Price" />
        <SelectComponent
          options={releaseDateOptions}
          placeholder="Release Date"
        />
        <AudioPlayer item={selectedImageName} setIsStop={setIsStop} />
      </Container>
      <GridItems
        setSelectedImageName={setSelectedImageName}
        setIsStop={setIsStop}
        isStop={isStop}
      />
    </Container>
  );
}

export default ProductOptions;

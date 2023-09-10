interface OptionType {
  label: string;
  value: string;
}

export const formatOptions: OptionType[] = [
  { value: 'All', label: 'All Formats' },
  { value: 'wave', label: 'Wave' },
  { value: 'ableton', label: 'Ableton' },
];

export const genreOptions: OptionType[] = [
  { value: 'All', label: 'All Genres' },
  { value: 'Hip-Hop', label: 'Hip-Hop' },
  { value: 'Lo-Fi', label: 'Lo-Fi' },
  { value: 'Ambient', label: 'Ambient' },
];

export const priceOptions: OptionType[] = [
  { value: 'All', label: 'Price' },
  { value: 'price-low', label: 'Low Price' },
  { value: 'price-high', label: 'High Price' },
];

export const releaseDateOptions: OptionType[] = [
  { value: 'new', label: 'New' },
  { value: 'old', label: 'Old' },
];

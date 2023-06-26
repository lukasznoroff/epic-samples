import Select from 'react-select';

console.log(Select);

interface SampleProps {
  id: string;
  fields: {
    name: string;
    image: {
      url: string;
    }[];
    audio: {
      url: string;
    }[];
  };
}

interface GridItemsProps {
  data: SampleProps[];
}

function GridItems({ data }: GridItemsProps) {
  return (
    <section className='w-[80vw] h-[50vh] mx-auto md:grid md:grid-cols-4 gap-4 sm:grid-cols-1'>
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={item.fields.image[0].url}
            width='200px'
            height='200px'
            alt=''
          />
          <p className='mt-4'>{item.fields.name}</p>
        </div>
      ))}
    </section>
  );
}

export default GridItems;

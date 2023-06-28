import { useDataContext } from '../hooks/useDataContext';

function GridItems() {
  const { data } = useDataContext();

  return (
    <section className='w-[90vw] h-[100vh] mx-auto grid justify-center grid-cols-4 gap-4'>
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={item.fields.image[0].url}
            width='100%'
            height='100%'
            alt=''
          />
          <p className='mt-4'>{item.fields.name}</p>
          {/* {item.fields.audio[0].url} */}
        </div>
      ))}
    </section>
  );
}

export default GridItems;

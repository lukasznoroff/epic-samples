import HeroImage from '../images/bg-hero-image.jpg';

function Home() {
  return (
    <section>
      <div
        className='ustify-center h-[80vh]  w-[100vw] bg-cover bg-center xs:px-8'
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className='h-[100%] content-center  md:px-32 justify-center	flex items-start flex-col'>
          <h1 className='text-[40px] max-w-sm font-normal leading-[40px]'>
            Your destination for unique music samples
          </h1>
          <p className='mt-4'>Uncover inspiring sounds</p>
        </div>
      </div>
      
    </section>
  );
}

export default Home;

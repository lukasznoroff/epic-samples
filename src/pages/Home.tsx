import HeroImage from '../images/bg-hero-image.jpg';
import ProductOptions from '../components/ProductOptions';
import Heading from '../components/ui/typography/Heading';
import Container from '../components/ui/container/Container';
import Paragraph from '../components/ui/typography/Paragraph';

function Home() {
  return (
    <>
      <section>
        <Container
          variant="image"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <Container variant="hero">
            <Heading variant="h1" >
              Your destination for unique music samples
            </Heading>
            <Paragraph variant='main'>
              Uncover inspiring sounds
            </Paragraph>
          </Container>
        </Container>
        <ProductOptions />
      </section>
    </>
  );
}

export default Home;

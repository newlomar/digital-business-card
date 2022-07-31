import Hero from '../Hero/Hero';
import About from '../About/About';
import Social from '../Social/Social';

export default function Card() {
  return (
    <div className='card'>
      <Hero />
      <About />
      <Social />
    </div>
  );
}

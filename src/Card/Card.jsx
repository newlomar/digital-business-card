import Hero from '../Hero/Hero';
import About from '../About/About';
import Social from '../Social/Social';

export default function Card({ design }) {
  return (
    <div className='card'>
      <Hero design={design} />
      <About />
      <Social design={design} />
    </div>
  );
}

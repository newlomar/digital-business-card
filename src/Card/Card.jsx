import Hero from '../Hero/Hero';
import About from '../About/About';
import Social from '../Social/Social';

export default function Card({ design, theme }) {
  return (
    <div className='card'>
      <Hero design={design} theme={theme} />
      <About />
      <Social design={design} />
    </div>
  );
}

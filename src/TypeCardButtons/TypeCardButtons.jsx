import sol from '../assets/sol.png';
import lua from '../assets/lua.png';
import website from '../assets/website.png';
import webpage from '../assets/webpage.png';

export default function TypeCardButtons({ switchTheme }) {
  return (
    <section className='typeCardButtonsSection'>
      <h2 className='buttonsHeading'>
        Make the card <span className='reactNameEmphasize'>React</span> to your
        decisions!
      </h2>
      <div className='switchDivison'>
        <img className='typeCardImgs' src={sol} alt='sol' />
        <input type='checkbox' id='switchThemeColor' />
        <label
          htmlFor='switchThemeColor'
          className='switchTheme'
          onClick={switchTheme}
        >
          Toggle
        </label>
        <img className='typeCardImgs' src={lua} alt='lua' />
      </div>
      <div className='switchDivison'>
        <img className='typeCardImgs' src={website} alt='website' />
        <input type='checkbox' id='switchDesign' />
        <label htmlFor='switchDesign' className='switchTheme design'>
          Toggle
        </label>
        <img className='typeCardImgs' src={webpage} alt='webpage' />
      </div>
    </section>
  );
}

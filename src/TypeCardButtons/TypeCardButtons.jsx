import sol from '../assets/sol.png';

export default function TypeCardButtons() {
  return (
    <section className='typeCardButtonsSection'>
      <h2 className='buttonsHeading'>
        Make it <span className='reactNameEmphasize'>React</span> to your
        decisions!
      </h2>
      <div>
        <img className='typeCardImgs' src={sol} alt='' />
        <input type='checkbox' id='switchThemeColor' />
        <label htmlFor='switchThemeColor' className='switchTheme'>
          Toggle
        </label>
        <img src='' alt='' />
      </div>
      <div>
        <img src='' alt='' />
        <input type='checkbox' id='switchDesign' />
        <label htmlFor='switchDesign' className='switchTheme design'>
          Toggle
        </label>
        <img src='' alt='' />
      </div>
    </section>
  );
}

export default function TypeCardButtons() {
  return (
    <section className='typeCardButtonsSection'>
      <h2>
        Make it <span className='reactNameEmphasize'>React</span> your
        decisions!
      </h2>
      <div>
        <input type='checkbox' id='switchThemeColor' />
        <label htmlFor='switchThemeColor' className='switchTheme'>
          Toggle
        </label>
      </div>
      <div>
        <input type='checkbox' id='switchDesign' />
        <label htmlFor='switchDesign' className='switchTheme design'>
          Toggle
        </label>
      </div>
    </section>
  );
}

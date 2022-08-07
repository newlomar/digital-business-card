export default function TypeCardButtons() {
  return (
    <section>
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

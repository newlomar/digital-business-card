import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import linkedin_footer from '../assets/linkedin_footer.png';

export default function Social({ design }) {
  return (
    <footer className='footer'>
      <a href='https://twitter.com/lomar_newton' target='_blank'>
        <img src={twitter} alt='twitter logo' />
      </a>
      <a href='https://www.youtube.com/watch?v=a3Z7zEc7AXQ' target='_blank'>
        <img src={facebook} alt='facebook logo' />
      </a>
      <a href='https://www.instagram.com/feitosanewton/' target='_blank'>
        <img src={instagram} alt='instagram logo' />
      </a>
      {design === 'two' ? (
        <a href='https://www.linkedin.com/in/newtonlomar/' target='_blank'>
          <img src={linkedin_footer} alt='linkedin logo' />
        </a>
      ) : (
        ''
      )}
      <a href='https://github.com/newlomar' target='_blank'>
        <img src={github} alt='github logo' />
      </a>
    </footer>
  );
}

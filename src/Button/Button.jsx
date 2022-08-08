import emailLogo from '../assets/email.png';
import linkedinLogo from '../assets/linkedin.png';

export default function Button({ type }) {
  return type === 'email' ? (
    <a
      className='button__email'
      href='mailto:newtonlomar16@gmail.com'
      target='_blank'
    >
      <img className='emailLogo' src={emailLogo} alt='email logo' />
      <h5 className='h5'>Email</h5>
    </a>
  ) : (
    <a
      className='button__linkedin'
      href='https://www.linkedin.com/in/newtonlomar/'
      target='_blank'
    >
      <img className='linkedinLogo' src={linkedinLogo} alt='linkedin logo' />
      <h5 className='h5'>LinkedIn</h5>
    </a>
  );
}

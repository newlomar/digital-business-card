export default function Button({ type }) {
  return type === 'email' ? (
    <a className='button__email'>
      <img src={emailLogo} alt='email logo' />
      <h5>Email</h5>
    </a>
  ) : (
    <a className='button__linkedin'>
      <img src={linkedinLogo} alt='email logo' />
      <h5>Linkedin</h5>
    </a>
  );
}

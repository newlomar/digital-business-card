import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <div>
      <img
        className='profile_pic'
        src={profile}
        alt="Newton Lomar's Profile Pic"
      />
      <div className='hero__text'>
        <h1 className='h1'>Newton Lomar</h1>
        <h2 className='h2'>Frontend Developer</h2>
        <h3 className='h3'>
          <a href='https://www.newtonlomar.com'>newtonlomar.com</a>
        </h3>
      </div>
    </div>
  );
}

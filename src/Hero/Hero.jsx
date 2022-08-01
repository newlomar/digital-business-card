import profile from '../assets/profile.jpg';
import Button from '../Button/Button';
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
          <a href='https://www.newtonlomar.com' target='_blank'>
            newtonlomar.com
          </a>
        </h3>
      </div>
      <div className='hero__buttons'>
        <Button type='email' />
        <Button type='linkedin' />
      </div>
    </div>
  );
}

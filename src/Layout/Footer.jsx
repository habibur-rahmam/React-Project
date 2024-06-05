import Logo from '../assets/avada-logo.svg';
import FooterItems from './Navlist';

const Footer = () => {
  return (
    <div className='bg-white p- w-full'>
      <div className=" max-w-[1140px] mx-auto flex justify-between py-16 grid-cols-3 bg-white">
        <div className="w-80">
        <>
        <img className='h-8 mb-8' src={Logo} alt="avatar" />
          <p className="text-base text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta dicta cupiditate quos autem ad ut tenetur! Saepe, molestiae rerum in sapiente fuga officia cumque, sit perspiciatis earum assumenda aut?
          </p>
         </>
        </div>

        <div className="w-3/1">
          <FooterItems />
        </div>

        <div className="w-1/3">
        <>
         <h4 className="text-gray-800 text-lg font-bold pb-1 mb-5 uppercase">Contact</h4>
          <ul className="gap-8 items-center text-gray-800">
            <li className="flex gap-2 mb-3 font-bold">Email: <span className="font-normal">gmailinfo@gmail.com</span></li>
            <li className="flex gap-2 mb-3 font-bold">Phone: <span className="font-normal capitalize">01701023546</span></li>
          </ul>
        </>
        </div>
      </div>
    </div>
  );
}
export default Footer;

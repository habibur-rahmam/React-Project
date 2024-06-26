import logo from '../assets/avada-logo.svg';
import Navmenu from './Navmenu';

const Header = () => {
  return (
    <div className="bg-white pt-10 pb-5 w-full">
      <div className='max-w-[1140px] mx-auto flex justify-between items-center'>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" className="h-8"/>
          </a>
        </div>
        <div className="">
          <Navmenu />
        </div>
        <div className="button">
          <button className='bg-green-500 text-white hover:text-green-500 hover:bg-white border border-green-500 font-medium py-2 px-4 rounded capitalize'> All Product</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

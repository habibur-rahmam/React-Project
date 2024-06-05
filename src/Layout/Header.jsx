import logo from '../assets/avada-logo.svg';
import Navmenu from './Navmenu';

const Header = () => {
  return (
    <div className="bg-white p-5 w-full">
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
          <button className='bg-white text-green-500 hover:text-white hover:bg-green-500 border border-green-500 font-medium py-2 px-4 rounded uppercase'>my avada</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

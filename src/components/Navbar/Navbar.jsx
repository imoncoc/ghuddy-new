import { Link } from 'react-router-dom';
import Banner from '../header/Banner'
import SearchingSection from '../header/SearchingSection'
import TopCountries from '../topCountries/TopCountries';
import Tours from '../tours/Tours'

const Navbar = () => {
  return (
    <>
      <div className="w-full fixed z-50 h-min-[80px]">
        <div className="bg-bg-primary">
          <div className="xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px]  py-6 mx-auto">
            <div className="flex  justify-between items-center text-txt-primary_light text-base16 font-normal z-20">
              <div>
                <h2>Ghuddy</h2>
              </div>
              <div className="flex flex-row items-center gap-[24px]">
                <Link to={`/reactQuills`} className='hidden md:flex cursor-pointer hover:text-btn-secondary'>React Quills</Link>
                <p className='hidden md:flex'>Find Lodging</p>
                <p className='hidden md:flex'>My Favourites</p>
                <p className='hidden md:flex'>Get Help</p>
                <button className="bg-btn-secondary text-bg-white  text-base14  
                w-[120px] h-[36px] rounded-full">
                  Log In
                </button>
                <button className="text-btn-secondary bg-bg-white text-base14 w-[120px] h-[36px] rounded-full border-[1px] border-btn-secondary">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner></Banner>
      <SearchingSection></SearchingSection>
      <Tours></Tours>
      <TopCountries></TopCountries>
    </>
  );
}

export default Navbar
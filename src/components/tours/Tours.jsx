
import { useState } from 'react';
import Categories from '../categories/Categories'
import TourCard from './TourCard';
import Trips from '../trips/trips';
import CitiesToVisit from '../citiesToVisit/CitiesToVisit';

const Tours = () => {
  const [tourTypes, setTourTypes] = useState("");

  return (
    <>
      <div className="w-full bg-bg-bg_light">
        <div className="bg-bg-bg_light pt-[32px]">
          <div className="xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] my-[20px] mx-auto">
            <h2 className="text-[32px] font-medium leading-[140%] tracking-wider my-[10px]">
              Tours
            </h2>
          </div>
        </div>
      <div className='mb-[16px]'><Categories></Categories></div>
      <TourCard>
        {"Top Tours"}
      </TourCard>
      <TourCard>
        {"Deals"}
      </TourCard>
      <Trips title={"Corporate trip?"} description={"Contact us for special quotation!"} btnData={"Get a Quotation"}></Trips>
      <TourCard>
        {"Hotels"}
      </TourCard>
      <TourCard>
        {"Deals"}
      </TourCard>
      <Trips title={"Require Trip Assistance?"} description={"Get your Trip organised for you!"} btnData={"Get a Quotation"}></Trips>
      <TourCard>
        {"Best Activities"} 
      </TourCard>
      <CitiesToVisit></CitiesToVisit>
      <TourCard>
        {"Promoted Tours & Activities"} 
      </TourCard>
      </div>
    </>
  );
}

export default Tours
import { addressLineOne, addressLineTwo, contactEmail } from './constants';
import buildingIcon from "../../../assets/building.png";
import envelopeIcon from "../../../assets/envelope.png";

export default function ContactInfo() {
  return (
    <div className='grid grid-cols-6 grid-rows-4 gap-y-4 px-6 mt-6 md:grid-rows-3 md:gap-y-0'>
      <div className='grid grid-cols-6 gap-x-6 col-span-6 font-medium md:col-span-2'>
        <img src={buildingIcon} alt="Building Icon" className="h-[30px] w-[29px]" />
        <div className='col-span-5'>
          <p>{addressLineOne}</p>
          <p>{addressLineTwo}</p>
        </div>
      </div>
      <div className='grid grid-cols-6 gap-x-6 col-span-6 font-medium md:col-span-2 md:row-start-2'>
        <img src={envelopeIcon} alt="Envelope" className="h-[20px] w-[30px]" />
        <p className='col-span-5'>{contactEmail}</p>
      </div>
      {/* <div className='h-px bg-light-grey mb-7' /> */}
      <div className='col-span-5 md:col-start-5'>
        Copyright 2021, EyeCue Lab
      </div>
    </div>
  )
}
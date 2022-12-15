import React from 'react';

import { addressLineOne, addressLineTwo, contactEmail } from '../../constants';
import buildingIcon from '../../images/building.png';
import envelopeIcon from '../../images/envelope.png';

// #E0E9ED

export default function ContactInfo() {
  return (
    <div className='px-6 py-14'>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center pb-7'>
          <img src={buildingIcon} alt="Building Icon" className="h-[30px] w-[29px]" />
          <div className='flex flex-col pl-10 font-medium'>
            <div>{addressLineOne}</div>
            <div>{addressLineTwo}</div>
          </div>
        </div>
        <div className='flex flex-row items-center pb-7 font-medium'>
          <img src={envelopeIcon} alt="Envelope" className="h-[20px] w-[30px]" />
          <div className='pl-10'>
            {contactEmail}
          </div>
        </div>
        <div className='h-px bg-light-grey mb-7' />
        <div className='flex flex-row'>
          Copyright 2021, EyeCue Lab
        </div>
      </div>
    </div>
  )
}
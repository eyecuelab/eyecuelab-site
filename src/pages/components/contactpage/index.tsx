import React from 'react';

import Button from '../button';
import ContactInfo from './contactInfo';
import { talkCopy } from './copy';

export default function ContactPage() {
  return (
    <div className='flex flex-col w-full h-full border-2 border-rose-700'>
      <div className='flex flex-col justify-center w-full h-1/2 bg-darker-blue px-6'>
        <div className=''>
          <div className='py-1'>
            <h1>Let's Talk</h1>
          </div>
          <div className='max-w-s py-1'>
            <p>{talkCopy}</p>
          </div>
          <div className='py-1'>
            <Button
              style="w-full h-12 border border-white"
              text="Discuss your ideas with us"
            />
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className='w-full h-1/2 bg-primary-blue'>
        <div>there is an image / animation on this one</div>
      </div>
      <ContactInfo />
    </div>
  );
}
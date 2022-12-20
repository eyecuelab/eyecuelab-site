import React from 'react';

import Button from '../components/button';
import ContactInfo from './contactInfo';
import { talkCopy } from './copy';

export default function ContactPage() {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-col justify-center w-full h-1/2 bg-darker-blue px-6 text-white'>
        <div className='mt-20 pb-2'>
          <h1 className='text-3xl font-bold'>Let's Talk</h1>
        </div>
        <div className='max-w-s py-1'>
          <p>{talkCopy}</p>
        </div>
        <div className='mt-2 mb-24'>
          <Button
            style="w-full h-12 border border-white font-bold"
            text="Discuss your ideas with us"
          />
        </div>
      </div>
      <div className='w-full h-1/2 bg-primary-blue text-white'>
        <div>there is an image / animation on this one</div>
      </div>
      <ContactInfo />
    </div>
  );
}
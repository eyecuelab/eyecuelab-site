import React from 'react';

import Button from '../components/button';
import { helpCopy } from './copy';

export default function WhoWeHelpPage() {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='pt-16 pb-7 text-3xl font-bold px-6'>
        <h1>Who We Help</h1>
      </div>
      <div className='h-80'>video container?</div>
      <div className='bg-lighter-grey px-6'>
        <div className='text-center'>
          <p className='pt-16 pb-7 text-2xl font-bold'>
            Reduce Complexity And Eliminate Human Error
          </p>
        </div>
        <div>
          <p className='font-medium text-center'>
            {helpCopy}
          </p>
        </div>
        <div className='mt-8 mb-14'>
          <Button
            style="w-full h-12 border border-primary-blue text-primary-blue font-bold"
            text="Case Study +"
          />
        </div>
      </div>
    </div>
  );
}
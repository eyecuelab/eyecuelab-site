import Button from '../../button';
import { helpCopy } from './constants';

export default function WhoWeHelpPage() {
  return (
    <div className='w-screen h-screen grid'>
      <div className='grid text-3xl font-bold px-6 content-center'>
        <h1>Who We Help</h1>
      </div>
      <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
        <div className='grid justify-items-center content-center bg-blue-grey'>
          <div>video?</div>
        </div>
        <div className='bg-lighter-grey px-6 md:grid md:grid-cols-6 content-center text-center md:text-left'>
          <div className='col-start-2 col-span-3'>
            <div className=''>
              <p className='pt-16 pb-7 text-2xl font-bold'>
                Reduce Complexity And Eliminate Human Error
              </p>
            </div>
            <div>
              <p className='font-medium'>
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
      </div>
    </div>
  );
}
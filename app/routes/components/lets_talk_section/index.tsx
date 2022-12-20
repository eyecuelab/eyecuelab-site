import ContactInfo from "./contactInfo";
import Button from "~/app/components/button";

import { talkCopy } from "./constants";

export default function LetsTalk() {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-1/2 bg-darker-blue px-6 text-white'>
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

import ContactInfo from "./contactinfo";
import Button from "../../button";

import { talkCopy } from "./constants";
import tailplane from "../../../assets/tailplaneframe.svg";

export default function LetsTalk() {
  return (
    <div className='grid grid-rows-3 w-screen h-screen'>
      <div className="grid grid-rows-2 row-span-2 md:grid-cols-2">
        <div className='bg-darker-blue px-6 text-white md:grid md:grid-cols-6 md:row-span-2 md:content-center'>
          <div className='mt-20 pb-2 md:col-span-4 md:col-start-2'>
            <h1 className='text-3xl font-bold'>Let's Talk</h1>
          </div>
          <div className='max-w-[700px] md:max-w-md py-1 md:col-span-4 md:col-start-2'>
            <p>{talkCopy}</p>
          </div>
          <div className='mt-2 mb-24 max-w-[700px] md:max-w-md md:col-span-4 md:col-start-2'>
            <Button
              style="w-full h-12 border border-white font-bold"
              text="Discuss your ideas with us"
            />
          </div>
        </div>
        <div className='grid grid-cols-3 grid-rows-1 bg-primary-blue items-center text-white md:row-span-2'>
          <img
            src={tailplane}
            alt="paper plane"
            className="col-span-2 w-full max-w-[320px] md:max-w-[520px]"
          />
          {/* <img
            src={planepath}
            alt="paper airplane path"
            className=""
          />
          <img
            src={airplane}
            alt="paper airplane"
            className="place-self-start"
          /> */}
        </div>
      </div>
      <ContactInfo />
    </div>
  );
}

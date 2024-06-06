import Image from 'next/image';
import { RiCheckFill } from 'react-icons/ri';
import Button from './components/Button';

export default function Home() {
  return (
    <main className='m-4' role='main'>
      {/* Base Card */}
      <section className='bg-white py-14 lg:py-24 shadow-sm md:shadow-md lg:shadow-lg rounded'>
        <div className='rounded px-3 py-12 lg:flex lg:px-24 lg:py-0 lg:gap-8 grid grid-cols-1 lg:grid-cols-2 items-center'>
          {/* Content */}
          <div>
            {/* Heading */}
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-neutral-900 font-semibold mb-4 md:mb-6 lg:mb-8'>
              Premium abstract images
            </h1>
            {/* Featured Bullets go here */}
            <ul className='flex flex-col gap-4 my-8 md:my-16'>
              <li className='text-lg text-neutral-600 font-normal flex items-center gap-x-3'>
                <RiCheckFill className='text-indigo-500 bg-indigo-50 w-6 h-6 rounded-full' />
                Minimum 5K image resolution
              </li>
              <li className='text-lg text-neutral-600 font-normal flex items-center gap-x-3'>
                <RiCheckFill className='text-indigo-500 bg-indigo-50 rounded-full h-6 w-6' />
                Various format variants available
              </li>
              <li className='text-lg text-neutral-600 font-normal flex items-center gap-x-3'>
                <RiCheckFill className='text-indigo-500 bg-indigo-50 w-6 h-6 rounded-full' />
                Retina display support
              </li>
            </ul>
            {/* Buttons */}
            <div className='flex gap-4 md:gap-8 mb-12 md:mb-8'>
              <Button className='text-neutral-900 bg-white focus:bg-[#FAFAFA] hover:bg-[#FAFAFA] disabled:bg-[#F5F5F5] disabled:text-[#A3A3A3] order-2 md:order-1'>
                Learn more
              </Button>
              <Button className='text-white bg-indigo-700 hover:bg-[#3730A3] focus:ring-indigo-100 focus:bg-[#3730A3] order-1 md:order-2'>
                See pricing
              </Button>
            </div>
          </div>
          {/* Image */}
          <figure>
            <Image
              className='rounded-2xl'
              src='/prism.png'
              alt='Abstract prism hero image'
              width={640}
              height={484}
              layout='responsive'
              priority
            />
            <figcaption className='sr-only'>Prism Hero Image</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

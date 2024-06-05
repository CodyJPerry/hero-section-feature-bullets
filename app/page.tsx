import Image from 'next/image';

export default function Home() {
  return (
    <main className='m-4' role='main'>
      {/* Base Card */}
      <section className='bg-white py-14 lg:py-24 shadow-sm md:shadow-md lg:shadow-lg rounded'>
        <div className='rounded px-3 py-12 lg:flex lg:px-24 lg:py-0 lg:gap-8'>
          {/* Content */}
          <div>
            {/* Heading */}
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-neutral-900 font-semibold mb-4 md:mb-6 lg:mb-8'>
              Premium abstract images
            </h1>
            {/* Featured Bullets go here */}

            {/* Buttons */}
            <div className='flex gap-4 md:gap-8 mb-12 md:mb-8'>
              <button className='text-base md:text-lg text-neutral-900 font-medium px-5 py-3 md:px-10 md:py-4 md:w-[213px] border-[0.5px] bg-white rounded grow md:grow-0 shadow hover:bg-[#FAFAFA] focus:outline-none focus:ring-4 focus:ring-offset-7 focus:ring-indigo-100 focus:rounded-sm focus:bg-[#FAFAFA] disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:text-[#A3A3A3]'>
                Learn more
              </button>
              <button className='text-base md:text-lg text-white font-medium bg-indigo-700 px-5 py-3 md:px-10 md:py-4 md:w-[213px] rounded grow md:grow-0 shadow hover:bg-[#3730A3] focus:outline-none focus:ring-4 focus:ring-offset-7 focus:ring-indigo-100 focus:rounded-sm disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:text-[#A3A3A3]'>
                See pricing
              </button>
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

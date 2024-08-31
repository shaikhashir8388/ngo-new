
const DonationCard = () => {
  return (
    <div className='flex justify-center top-1/2  transform -translate-y-1/2 z-50 '>
    <div className='flex bg-white h-32  lg:w-4/5 md: p-3  justify-evenly rounded-md shadow-xl  xsm:flex-col xsm:w-[90%] xsm:h-80 sm:w-[95%] sm:h-36  '>
        <div className='xsm:text-center'>
        <h3 className='text-red-500 text-2xl font-bold'>Make A Donation</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
        </div> 

        <div className='flex flex-col items-center space-y-4'> 
      <div className='flex flex-wrap justify-center space-x-2 xsm:space-y-2 xsm:px-2 '>
        <button className='border rounded-full border-black w-20  hover:bg-red-500 hover:border-none'>500 Rs</button>
        <button className='border rounded-full border-black w-20  hover:bg-red-500 hover:border-none '>1,000 Rs</button>
        <button className='border rounded-full border-black w-20  hover:bg-red-500 hover:border-none '>10,000 Rs</button>
        <button className='border rounded-full border-black w-20  hover:bg-red-500 hover:border-none '>25,000 Rs</button>
        <button className='border rounded-full border-black w-20  hover:bg-red-500 hover:border-none '>50,000 Rs</button>
        <button className='border rounded-full border-black w-20  hover:bg-red-500 hover:border-none '>custom Rs</button>
      </div>

      <div className='flex items-center space-x-2 xsm:flex-col xsm:space-y-2'>
        <div className='relative'>
        <input type="text" placeholder='500' className='border rounded-full border-black p-2 px-12 xsm:px-8 ' />
        {/* <span className='bg-red-500 text-white p-2 rounded-r-lg absolute top-1/2 left-1 transform -translate-y-1/2'>Rs</span> */}
        </div>
        
        <button className='bg-red-500 p-2 md:p-3 rounded-lg border-none px-6 md:px-8 text-white text-base md:ml-4 mdx:py-0'> {/* Adjust padding */}
              Donate Now
            </button>
      </div>
    </div>
       
       
        

      

   
      
      
    </div>
    </div>
  )
}

export default DonationCard

import { features } from '../constants'

function Business() {
  return (
    <div id='features' className='sm:px-16 px-8 pb-[80px] text-white flex gap-[40px] flex-wrap md:flex-nowrap items-center'>
      <div className='md:w-6/12 text-center md:text-left'>
        <h1 className='sm:text-[50px] text-[30px] font-semibold'>You do the business,</h1>
        <h1 className='sm:text-[50px] text-[30px] font-semibold'>we'll handle the money.</h1>
        <p className='text-dimWhite my-[20px]'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button className='bg-blue-gradient text-primary py-[20px] px-[36px] mt-[17px] rounded-lg'>Get Started</button>
      </div>
      <div className='flex flex-col gap-[30px] m-auto md:m-0'>
        {features.map((feature) => {
          return (
            <div className='flex gap-[20px] items-center p-[15px] rounded-lg feature-card flex-col md:flex-row text-center md:text-left'>
              <div className='bg-dimBlue p-3 rounded-full'>
                <img src={feature.icon} alt="" />
              </div>
              <div>
                <h2 className='font-bold text-[18px]'>{feature.title}</h2>
                <p className='text-dimWhite'>{feature.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Business

export default function About() {
  return (
    <div
      id='about'
      className='text-neutral-900 dark:text-neutral-50 font-nunito flex flex-col items-center gap-3 w-[85%] xs:w-[90%] md:w-[80%] short:gap-1 short:scale-90'
    >
      <img
        src='https://avatars.githubusercontent.com/u/102385102?v=4'
        alt='Levy Monteiro photo'
        className='w-48 h-48 sm:w-52 sm:h-52 rounded-full border-[3px] border-primary p-[6px] hover:border-0 hover:scale-105 ease-in-out duration-200'
      />
      <h1 className='font-bold text-xl xs:text-2xl'>Levy Monteiro</h1>
      <p className='opacity-80 text-[14px] xs:text-[15px] text-center'>
        Front-end Web Developer based on Rio de Janeiro, Brazil.
      </p>
    </div>
  );
}

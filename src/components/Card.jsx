export default function Card({ name, icon, src }) {
  return (
    <a
      id='card'
      className='flex justify-center items-center gap-4 text-primary shadow-sm shadow-secondary border-[3px] border-pritext-primary w-full h-12 rounded-lg hover:scale-110 hover:shadow-none hover:brightness-75 hover:dark:text-neutral-50 dark:text-shadow-x-0 dark:text-shadow-y-0 dark:text-shadow-blur-0 text-shadow text-shadow-x-3 text-shadow-y-3 text-shadow-blur-4 text-shadow-neutral-500 text-sm sm:text-base ease-in-out duration-300'
      href={src}
      target='_blank'
    >
      <div className='flex justify-center items-center'>{icon}</div>
      <p className=''>{name}</p>
    </a>
  );
}

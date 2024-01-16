export default function Card({ name, icon, src }) {
  return (
    <a
      id='card'
      className='flex justify-center items-center gap-4 text-primary shadow-sm shadow-secondary border-[3px] border-pritext-primary w-full h-12 rounded-lg hover:scale-110 hover:shadow-none hover:text-white text-sm sm:text-base ease-in-out duration-300'
      href={src}
      target='_blank'
    >
      <div className='flex justify-center items-center'>{icon}</div>
      <p className=''>{name}</p>
    </a>
  );
}

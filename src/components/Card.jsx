export default function Card({ name, icon, src }) {
  return (
    <a
      id='card'
      className='flex justify-center items-center m-auto gap-4 text-indigo-700 border-spacing-1 border-indigo-700 w-full h-12 rounded-sm'
      href={src}
      target='_blank'
    >
      <div className='flex justify-center items-center'>{icon}</div>
      <p className=''>{name}</p>
    </a>
  );
}

export default function Icon({ name, icon, src }) {
  return (
    <div id='icon' className='text-indigo-700 flex justify-center'>
      <a href={src} className='flex justify-center items-center'>
        {icon}
      </a>
    </div>
  );
}

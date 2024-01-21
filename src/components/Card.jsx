export default function Card({ name, icon, src }) {
  function copyLink(e) {
    e.preventDefault();
    const link = src;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard');
  }

  return (
    <a
      id='card'
      className='flex items-center justify-between px-6 xs:px-8 py-2 md:py-[10px] text-primary border-[3px] w-full h-min rounded-[7px] hover:scale-110 hover:brightness-75 hover:dark:text-neutral-50 dark:text-shadow-x-0 dark:text-shadow-y-0 dark:text-shadow-blur-0 text-shadow text-shadow-x-3 text-shadow-y-3 text-shadow-blur-6 text-shadow-neutral-500 text-[14px] sm:text-base ease-in-out duration-300'
      href={src}
      target='_blank'
    >
      <div className='flex justify-center items-center'>{icon}</div>
      <p className='font-medium'>{name}</p>
      <div
        id='copyLink'
        className='size-7 flex items-center justify-center rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-50 mr-[-4px]'
        onClick={copyLink}
      >
        <i className='fa-solid fa-arrow-up-from-bracket '></i>
      </div>
    </a>
  );
}

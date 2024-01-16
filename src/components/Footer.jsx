export default function Footer() {
  return (
    <div
      id='footer'
      className='flex justify-center gap-1 text-white opacity-80 text-[12px] sm:text-sm'
    >
      coded by
      <a
        href='https://github.com/levymonteiro'
        target='_blank'
        className='font-semibold hover:scale-110 hover:ml-1'
      >
        Levy Monteiro
      </a>
    </div>
  );
}

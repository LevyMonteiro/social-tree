import Card from './Card';
import About from './About';
import Footer from './Footer';

function App() {
  const cardData = [
    {
      name: 'Send a mail',
      icon: <i className='fa-solid fa-at scale-125'></i>,
      src: 'mailto:olevymonteiro@gmail.com',
    },
    {
      name: 'Instagram',
      icon: <i className='fa-brands fa-instagram scale-125'></i>,
      src: 'https://instagram.com/olevymonteiro',
    },
    {
      name: 'Linkedin',
      icon: <i className='fa-brands fa-linkedin-in scale-125'></i>,
      src: 'https://linkedin.com/in/levymonteiro',
    },
    {
      name: 'Github',
      icon: <i className='fa-brands fa-github scale-125'></i>,
      src: 'https://github.com/levymonteiro',
    },
  ];

  return (
    <div
      id='app'
      className='w-full sm:w-[80%] h-min md:bg-neutral-100 md:dark:bg-neutral-800 md:rounded-3xl md:shadow-lg md:shadow-primary md:dark:shadow-none md:h-[760px] md:w-[520px] sm:m-auto flex flex-col justify-center items-center border-spacing-1 gap-6 short:gap-0 relative -top-3 xs:-top-6 md:top-0'
    >
      <About />

      <div
        id='cards'
        className='flex flex-col justify-center gap-6 sm:gap-8 medium:gap-4 w-[80%] sm:w-96 short:scale-90 short:-mt-3'
      >
        {cardData.map((cd) => (
          <Card name={cd.name} icon={cd.icon} src={cd.src} key={cd.name} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;

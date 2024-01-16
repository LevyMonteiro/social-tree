import Card from './Card';
import About from './About';

function App() {
  const cardData = [
    {
      name: 'Send a mail',
      icon: <i className='fa-solid fa-at scale-150'></i>,
      src: 'mailto:olevymonteiro@gmail.com',
    },
    {
      name: 'Instagram',
      icon: <i className='fa-brands fa-instagram scale-150'></i>,
      src: 'https://instagram.com/olevymonteiro',
    },
    {
      name: 'Linkedin',
      icon: <i className='fa-brands fa-linkedin-in scale-150'></i>,
      src: 'https://linkedin.com/in/levymonteiro',
    },
    {
      name: 'Github',
      icon: <i className='fa-brands fa-github scale-150'></i>,
      src: 'https://github.com/levymonteiro',
    },
  ];

  return (
    <div
      id='app'
      className='w-screen sm:w-[80%] h-[90%] sm:h-screen my-auto sm:m-auto flex flex-col justify-center items-center border-spacing-1 py-16 sm:py-8 sm:py-0 gap-8'
    >
      <About />
      <div
        id='cards'
        className='flex flex-col justify-center gap-8 w-[80%] sm:w-96'
      >
        {cardData.map((cd) => (
          <Card name={cd.name} icon={cd.icon} src={cd.src} key={cd.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

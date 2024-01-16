import Card from './Card';
import Icon from './Icon';

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
      className='w-3/4 h-screen m-auto flex flex-col justify-center items-center gap-4 border-spacing-1 border-indigo-700'
    >
      <div id='cards' className='flex flex-col justify-center gap-8 w-96'>
        {cardData.map((cd) => (
          <Card name={cd.name} icon={cd.icon} src={cd.src} key={cd.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

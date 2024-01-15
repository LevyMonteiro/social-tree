import Card from './Card';

function App() {
  const cardData = [
    {
      name: 'Send a mail',
      icon: 'https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-1/512/at-256.png',
      src: 'mailto:olevymonteiro@gmail.com',
    },
    {
      name: 'Linkedin',
      icon: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/linkedin-256.png',
      src: 'https://linkedin.com/in/levymonteiro',
    },
    {
      name: 'Github',
      icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png',
      src: 'https://github.com/levymonteiro',
    },
  ];

  const icons = [
    {
      name: 'Instagram',
      icon: 'https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png',
      src: 'https://instagram.com/olevymonteiro',
    },
    {
      name: 'Twitter',
      icon: 'https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-256.png',
      src: 'https://x.com/olevymonteiro',
    },
    {
      name: 'Vsco',
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/vsco-256.png',
      src: 'https://vsco.co/olevymonteiro',
    },
  ];
  return (
    <div
      id='body'
      className='w-screen h-screen flex justify-center items-center'
    >
      <div id='cards' className='flex flex-col justify-center gap-8'>
        {cardData.map((cd) => (
          <Card name={cd.name} icon={cd.icon} src={cd.src} key={cd.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

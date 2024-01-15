export default function Card(props) {
  return (
    <a id='card' className='flex gap-4' href={props.src} target='_blank'>
      <img src={props.icon} alt='' className='size-6' />
      <p className=''>{props.name}</p>
    </a>
  );
}

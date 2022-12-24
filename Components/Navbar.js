import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image
          src='/polymath-logo.png'
          width={128}
          height={77}
          alt='polymath logo '
        />
      </div>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/polymathlist'}>Polymath listing</Link>
    </nav>
  );
};

export default Navbar;

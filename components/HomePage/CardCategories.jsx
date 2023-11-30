import Image from 'next/image';
import Link from 'next/link';

export default function CardCategories ({name, img}) {
    return ( 
    <>
        <Link className="flex-col w-full" href='/courses'>
            <Image
            className='w-full object-cover'
            src={img}
            width={140}
            height={100}
            alt={name}/>
            <p className='text-md text-center text-black font-semibold'>{name}</p>
        </Link>
    </>
    );
}
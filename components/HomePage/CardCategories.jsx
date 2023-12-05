import Image from 'next/image';
import Link from 'next/link';

export default function CardCategories ({name, image, categoryId}) {
    return ( 
    <>
        <Link className="flex-col w-full" href={`/courses?categoryId=${categoryId}`}>
            <Image
            className='w-full object-cover hover:scale-105 ease-in-out duration-200'
            src={image}
            width={140}
            height={100}
            alt={name}/>
            <p className='text-md text-center text-secret-text font-semibold'>{name}</p>
        </Link>
    </>
    );
}
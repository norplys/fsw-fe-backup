import Image from 'next/image';
import Link from 'next/link';

export default function CardCategories ({name, image, categoryId}) {
    return ( 
    <>
        <Link className="flex flex-col min-w-fit md:min-w-0 md:w-fit" href={`/courses?categoryId=${categoryId}`}>
            <Image
            className='w-full h-28 object-cover hover:scale-105 ease-in-out duration-200 md:h-32 rounded-3xl'
            src={image}
            width={140}
            height={100}
            alt={name}/>
            <p className='text-center text-secret-text font-semibold text-sm md:text-lg'>{name}</p>
        </Link>
    </>
    );
}
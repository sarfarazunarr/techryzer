import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={"/notfound.png"} alt='notfound' width={500} height={500} />
            <h3 className='text-center text-3xl text-white font-outfit font-semibold'>Page Not Found</h3>
            <Link href={"/"} className='primarybtn'>Visit Hompage</Link>
        </div>
    </div>
  )
}
export default NotFound;


import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const PembayaranSukses = () => {
  return (
    <div>

        {/* NOTIFIKASI BERHASIL PEMBAYARAN */}
        <div className='md:px-[100px] px-5 py-6 shadow-md'>
            {/* LINK KEMBALI */}

            <div className='bg-alert-green mx-auto px-5 py-3 rounded-xl md:w-[800px] mt-2'>
                <h1 className='text-center text-white font-bold md:text-[16px] text-[12px]'>Terimakasih atas pembayaran transaksi</h1>
            </div>
        </div>

        {/* MAIN */}
        <div className=' items-center w-full text-center mb-10'>
            <h1 className='font-bold text-secret-pink text-[64px]'>Selamat!</h1>
            <Image
                src='/shopSukses.svg'
                width={200}
                height={200}
                alt='gambar shopping cart'
                className='mx-auto'/>
            
            <h2 className='font-bold mt-3 md:text-[16px] text-[14px]'>Transaksi pembayaran kelas premium berhasil!</h2>
            <p className='mb-10 md:text-[14px] text-[12px]'>E-receipt telah dikirimkan ke email.</p>

            <button href='' className='bg-secret-pink text-white px-[100px] py-2 mb-10 rounded-[15px]'>
                <h2 className='font-bold'> Mulai Belajar</h2>
            </button>
            <Link href='' className='font-semibold text-DARKBLUE03'><h3>Kembali Ke Beranda</h3></Link>
        </div>
    </div>
  )
}

export default PembayaranSukses
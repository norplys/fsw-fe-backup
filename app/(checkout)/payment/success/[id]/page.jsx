"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

const PembayaranSukses = () => {
    const {id} = useParams();
    const {push} = useRouter();
    useEffect(() => {
        success();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const success = async () => {
        if(!id) return push("/");
        await mockLoading;
        push(`/course/${id}`);
    }
    const mockLoading = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 4000);
      });
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
        <div className='grid justify-center items-center w-full text-center mb-10 mt-4'>
            <h1 className='font-bold text-secret-pink text-5xl md:text-[64px]'>Selamat!</h1>
            <Image
                src='/shopSukses.svg'
                width={200}
                height={200}
                alt='gambar shopping cart'
                className='mx-auto h-44 md:h-full'/>
            
            <h2 className='font-bold mt-3 md:text-[16px] text-[14px]'>Transaksi pembayaran kelas premium berhasil!</h2>
            <p className='mb-10 md:text-[14px] text-[12px]'>E-receipt telah dikirimkan ke email.</p>
            <h2 className='font-bold bg-secret-darkblue p-2 rounded-full shadow-xl text-white w-fit text-xs md:text-base mx-1 md:mx-auto'> Kamu akan dialihkan ke halaman detail course, mohon tunggu...</h2>
        </div>
    </div>
  )
}

export default PembayaranSukses
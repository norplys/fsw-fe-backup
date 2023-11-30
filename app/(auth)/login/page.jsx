"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { PiEye } from "react-icons/pi"
import { PiEyeSlash } from "react-icons/pi"


const LoginPage = () => {
    //useState untuk password
    const [passValue, setPassValue] = useState({
        password: '',
        showPass: false,
    })

    //useState untuk Email
    const [Email, setEmail] = useState('')

    //handle onchange password
    const handlePass = (event) => {
        setPassValue({ ...passValue, password: event.target.value })
    }

    //buat ganti dari type password ke type text
    const toggleVisibility = () => {
        setPassValue({ ...passValue, showPass: !passValue.showPass })
    }
    // buat nyobain alert validasi
    const Dummy = {
        Email : 'coba1',
        password : 'cobaan'
    }
    //function buat bikin alert
    const showAlert = (message, type = 'info', duration = 5000)=>{
        const tempatAlert = document.querySelector('.tempatAlert')
        const alertElement = document.createElement('div')
        alertElement.classList.add('custom-alert')
        alertElement.classList.add('text-white')
        alertElement.classList.add('rounded-lg')
        alertElement.classList.add('w-[250px]')
        alertElement.classList.add('items-center')
        alertElement.classList.add('text-center')
        alertElement.classList.add('py-2')
        alertElement.classList.add('px-5')
        alertElement.classList.add('text-xs')
        alertElement.classList.add('bottom-6')
        alertElement.classList.add('mx-auto')
       
        if (type === 'success') {
            alertElement.classList.add('bg-alert-green')
        } else if (type === 'error') {
            alertElement.classList.add('bg-alert-red')
        }

        alertElement.textContent = message
        tempatAlert.appendChild(alertElement)

        setTimeout(() => {
            alertElement.style.display = 'none'
            tempatAlert.removeChild(alertElement)
        }, duration)
    }

    const inputEmailMerah = ()=>{
        const emailInput = document.querySelector('#emailInput')
        emailInput.classList.add('border-red-500')

        setTimeout(() => {
            emailInput.classList.remove('border-red-500')
        }, 5000)
    }
    const inputPassMerah = ()=>{
        const passInput = document.querySelector('#passInput')
        passInput.classList.add('border-red-500')

        setTimeout(() => {
            passInput.classList.remove('border-red-500')
        }, 5000)
    }
    const validasi = () => {
        if (Email === Dummy.Email && passValue.password !== Dummy.password) {
            inputPassMerah()
            showAlert('Maaf kata sandi salah', 'error')
        }
        else if(Email === Dummy.Email && passValue.password === Dummy.password){
            showAlert('Berhasil masuk', 'success')
        }
        else if(Email !== Dummy.Email && passValue.password === Dummy.password){
            inputEmailMerah()
            showAlert('Alamat email tidak terdaftar!', 'error')
        }
        else if(Email === '' && passValue.password === ''){
            showAlert('email dan kata sandi tidak boleh kosong', 'error')
        }
        else{
            showAlert('Maaf kata sandi salah atau email tidak terdaftar', 'error')
            inputEmailMerah()
            inputPassMerah()
        }
    }

    return (
        <div className=' flex flex-col lg:flex-row w-full min-h-screen'>
            {/* Bagian Kiri */}
            <div className='p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-white overflow-hidden'>
                <div className='w-full lg:w-2/3 text-black'>
                    <h1 className='font-bold text-[28px] text-DARKBLUE05  lg:mb-12 text-left'>Masuk</h1>

                    {/* Email/No telp */}
                    <div className='mb-4 lg:mb-8'>
                        <p className='float-left'>Email/No Telpon</p>
                        <br />
                        <input
                            type='text'
                            name='Email'
                            placeholder='Contoh: johndoe@gmail.com'
                            id='emailInput'
                            className='emailInput float-left  border-2 rounded-2xl w-full p-2 text-black'
                            value={Email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className='mt-2 relative block mb-4 lg:mb-8'>
                        <br />
                        <p className='float-left'>Password</p>
                    
                        <p className='float-right'>
                            <a href='Login/ForgotPass' className='text-DARKBLUE05 font-medium'>
                                Lupa Kata Sandi
                            </a>
                        </p>
                        <br />
                        <input
                            type={passValue.showPass ? 'text' : 'password'}
                            name='password'
                            id='passInput'
                            placeholder='Password'
                            className='float-left border-2 rounded-2xl w-full p-2 text-black'
                            value={passValue.password}
                            onChange={handlePass}
                            required
                        />

                        <button className='absolute right-4 top-14' onClick={toggleVisibility}>
                            {!passValue.showPass ? <PiEye color='grey' size={30}/> : <PiEyeSlash color='grey' size={30}/>}
                        </button>
                    </div>
                    <br />
                    <br />

                    {/* Login button */}
                    <button
                        className='text-white bg-DARKBLUE05 rounded-lg w-full p-2'
                        onClick={validasi}
                    >
                        Masuk
                    </button>
                    <br />

                    <p className='text-black items-center text-center mt-6'>Belum punya akun? <a href="/" className='text-DARKBLUE05 font-bold'>Daftar di sini</a></p>

                    {/* div kosong buat tempat alert */}
                    <div className="tempatAlert w-full mt-10 ease-in-out "></div>
                </div>
            </div>

            {/* Bagian Kanan */}
            <div className='bg-DARKBLUE05 p-8 lg:p-16 lg:w-1/3 flex items-center justify-center'>
                <Image src='/Belajar_white 3.svg' alt='logo' width={300} height={300} className='mx-auto' />
            </div>
            
        </div>
    )
}

export default LoginPage






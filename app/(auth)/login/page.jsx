"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { PiEye } from "react-icons/pi"
import { PiEyeSlash } from "react-icons/pi"
import { BiBrain } from 'react-icons/bi'


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
            <div className='p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-black overflow-hidden flex-1'>
                <div className='w-full lg:w-2/3 text-black flex flex-col'>
                    <h1 className='font-bold text-[28px] text-secret-text  lg:mb-12 text-left'>Masuk</h1>

                    {/* Email/No telp */}
                    <div className='mb-4 lg:mb-8'>
                        <p className='font-bold text-secret-text'>Email/No Telpon</p>

                        <input
                            type='text'
                            name='Email'
                            placeholder='Contoh: johndoe@gmail.com'
                            id='emailInput'
                            className='emailInput float-left  border-2 rounded-2xl w-full p-2 text-black mt-4'
                            value={Email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className='grid grid-cols-2 mb-4 lg:mb-8 pt'>

                        <p className=' font-bold text-secret-text'>Password</p>
                    
                        <p className='flex justify-end'>
                            <a href='Login/ForgotPass' className='text-secret-text font-medium'>
                                Lupa Kata Sandi
                            </a>
                        </p>
                        
                        <input
                            type='password'
                            name='password'
                            id='passInput'
                            placeholder='Password'
                            className='float-left border-2 rounded-2xl w-full p-2 text-black col-span-2 mt-4'
                            value={passValue.password}
                            onChange={handlePass}
                            required
                        />
                    </div>

                    {/* Login button */}
                    <button
                        className='text-black font-bold bg-secret-orange  rounded-lg w-full p-2'
                        onClick={validasi}
                    >
                        Masuk
                    </button>

                    <p className='text-secret-text items-center text-center mt-6'>Belum punya akun? <a href="/" className='text-secret-text font-bold'>Daftar di sini</a></p>

                    {/* div kosong buat tempat alert */}
                    <div className="tempatAlert w-full mt-10 ease-in-out "></div>
                </div>
            </div>

            {/* Bagian Kanan */}
            <div className='bg-black p-8 lg:p-16 lg:w-1/3 flex items-center justify-center flex-1'>
                <BiBrain className='text-9xl text-white' />
                <div className='flex'>
				<h1 className='text-7xl text-white flex items-center font-bold px-1'>Skill</h1>
				<h1 className='text-7xl text-black font-bold bg-orange-400  rounded-xl p-1'>HUB</h1>
				</div>
            </div>
            
        </div>
    )
}

export default LoginPage






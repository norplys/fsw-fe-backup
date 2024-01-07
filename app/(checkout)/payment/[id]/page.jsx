"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import axios from "axios";
import { useParams } from "next/navigation";
import CircleLoading from "@/components/CircleLoading";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function KelasPembayaran () {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const {push} = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    getData(token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getData = async (token) => {
    try{
    const res = await axios.get(
      `https://api.academy-skillhub.com/v1/courses/invoice/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setData(res.data.data);
    setLoading(false);
    }
    catch(err){
      push('/');
    }
  };
  const handlePayment = async (paymentId) => {
    try{
    const token = localStorage.getItem("token");
    setLoading(true);
    const res = await axios.put(
      `https://api.academy-skillhub.com/v1/courses/payment/${paymentId}`,
      {
        payment_method : "credit card",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    push(`/payment/success/${res.data.data.courseUuid}`);
    }
    catch(err){
      toast.error(err.response.data.message);
      setLoading(false);
    }
  };
  if (loading) return <CircleLoading />;

  const priceFormat = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  }
  return (
    <div>
      {/* KEMBALI DAN NOTIFIKASI BATAS PEMBAYARAN */}
      <div className="md:px-[100px] px-5 py-6 shadow-md">
        {/* LINK KEMBALI */}
        <Link href="/courses" className="flex gap-5 text-sm md:text-base items-center hover:text-secret-darkblue hover:underline">
          <FaArrowLeft />
          <h1 className="font-bold ">Kembali</h1>
        </Link>

        <div className="bg-secret-red mx-auto md:mx-auto px-5 py-3 rounded-xl md:w-[500px] lg:w-[800px] xl:w-[800px] mt-2">
          <h1 className="text-center text-white font-bold md:text-[16px] text-[12px]">
            Selesaikan Pembayaran sebelum <div>{data?.expired}</div>
          </h1>
        </div>
      </div>
      <div className="flex md:flex-col lg:flex-row xl:flex-row 2xl:flex-row flex-col max-w-[1440px] md:px-[100px] xl:px-[215px] 2xl:px-[215px] h-[600px] md:mt-10  justify-center mx-auto gap-6">
        {/* KIRI */}
        {/* kotak Pembayaran */}
        <div className="md:w-[417px] sm:mx-auto sm:w-[417px] lg:w-[420px] xl:w-[420px] 2xl:w-[420px] md:mt-20 xl:mt-0 2xl:mt-0">
          <div className= "max-w-md rounded-2xl bg-white p-2 mx-auto">
            <Disclosure className="sm:w-[600px]">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#3c3c3c] px-4 py-2 text-left text-sm font-medium text-white">
                    <span>Bank Transfer</span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black w-full">
                    This Feature Currently Unavailable
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-secret-pink px-4 py-2 text-left text-sm font-medium text-white">
                    <span>Credit Card</span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 text-sm text-black w-full">
                    <div className="p-2  ">
                      {/* PAYMENT OPTIONS */}
                      <div className="flex gap-5 place-content-center  place-items-center">
                        <Link href="#">
                          <Image
                            src="/icon/mastercard logo.svg"
                            width={50}
                            height={50}
                            alt="mastercard"
                          />
                        </Link>
                        <Link href="#">
                          <Image
                            src="/icon/visa logo.svg"
                            width={50}
                            height={50}
                            alt="visa"
                          />
                        </Link>
                        <Link href="#">
                          <Image
                            src="/icon/amex logo.svg"
                            width={50}
                            height={50}
                            alt="amex"
                          />
                        </Link>
                        <Link href="#">
                          <Image
                            src="/icon/paypal logo.svg"
                            width={50}
                            height={50}
                            alt="paypal"
                          />
                        </Link>
                      </div>
                      {/* CARD DETAIL */}
                      <form action="" className="md:w-[400px]">
                        <div className="mt-3">
                          <h3 className="font-bold">Card Number</h3>
                          <input
                            type="text"
                            className="border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black w-full"
                            placeholder="4480 0000 0000 0000"
                          />
                        </div>

                        <div className="mt-3">
                          <h3 className="font-bold">Card Holder Name</h3>
                          <input
                            type="text"
                            className="border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black w-full"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="flex gap-5 mt-3">
                          <div>
                            <h3 className="font-bold">CVV</h3>
                            <input
                              type="text"
                              className="border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black md:w-[250px] w-[140px]"
                              placeholder="000"
                            />
                          </div>

                          <div>
                            <h3 className="font-bold">Expiry Date</h3>
                            <input
                              type="text"
                              className="border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black md:w-[132px] w-[100px]"
                              placeholder="07/24"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        {/* KANAN */}
        {/* PEMBAYARAN KELAS */}
        <div className="md:w-[400px] w-full rounded-[16px] shadow-xl flex-grow-0 flex-shrink-0 h-[372px] bg-secret-blue pt-2 px-2 mx-auto">
          <h1 className="font-bold text-center">Pembayaran Kelas</h1>
          {/* KOTAK COURSE */}
          <div className="md:w-[323px] h-[150px] shadow-md rounded-[15px] mx-auto mt-3 bg-white">
            <div className="">
              <div className="h-20">
              <Image src={data.image} width={323} height={80} alt="course-image" className="w-full h-full object-cover rounded-t-2xl" />
              </div>
              {/* TEXT KONTEN */}
              <div className="p-2">
                <h3 className="font-semibold md:text-[14px]  text-secret-pink">
                  {data.type}
                </h3>
                <h3 className="font-semibold md:text-[12px] text-[11px]">
                  {data.name}
                </h3>
                <p className="md:text-[10px] text-[8px]">By {data.author}</p>
              </div>
            </div>
            <div className="flex mt-5 justify-between">
              {/* HARGA */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-sm md:text-[16px]">Harga</h4>
                <p className="md:text-[14px] text-[12px]">{priceFormat(data.price)}</p>
              </div>
              {/* PPN */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-sm">PPN 11%</h4>
                <p className="md:text-[14px] text-[12px]">{priceFormat(data.tax)}</p>
              </div>
              {/* TOTAL BAYAR */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-sm">Total Bayar</h4>
                <p className="font-bold text-secret-text md:text-[14px] text-[12px]">
                  {priceFormat(data.total)}
                </p>
              </div>
            </div>
            {/* TOMBOL BAYAR */}
            <button className=" justify-between flex w-full bg-secret-darkblue px-5 py-3 rounded-[15px] mt-5 hover:scale-x-105 duration-300" onClick={(e) => {e.preventDefault(), handlePayment(data.paymentUuid)}}>
              <h2 className="font-bold text-white md:text-[16px] text-[12px] ">
                Bayar dan Ikuti Kelas Selamanya
              </h2>
              <FaArrowAltCircleRight className="md:w-[20px] md:h-[20px] text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};




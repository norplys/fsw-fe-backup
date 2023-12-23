
export default function Password(){
    return(
        <form className="items-center justify-between px-4 md:px-12 w-full md:w-[20rem] text-[0.625rem]">
                            <div className="flex flex-row justify-center px-8 gap-10 my-6">
                                <h1 className="font-black text-xl">Ubah Password</h1>
                            </div>
                            {/* <div className="flex p-1 gap-2"> */}
                                <div className="flex flex-col md:w-[16rem] mb-2">
                                    <label htmlFor="name" className="text-gray-800 font-bold leading-tight tracking-normal text-xs mb-2">Masukkan Password Lama</label>
                                    <input
                                        type="text"
                                        id="name" 
                                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm" 
                                        placeholder="Text" 
                                        />
                                </div>
                            {/* </div> */}
                            <div className="flex flex-col md:w-[16rem] my-2">
                                <label htmlFor="name" className="text-gray-800 font-bold leading-tight tracking-normal text-xs mb-2">Masukkan Password Baru</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex flex-col md:w-[16rem] my-2">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal text-xs mb-2">Ulangi Password Baru</label>
                                <input 
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex items-center justify-center md:w-[16rem] p-5 mb-8">
                            <button
                                type="button"
                                className="bg-[#6148FF] text-white active:bg-indigo-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-indigo-400 mr-1 mb-1 ease-linear transition-all duration-150 text-sm">
                                Ubah Password
                            </button>
                        </div>
        </form>
    );
}
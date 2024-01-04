import { FiBell, FiList, FiUser } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
export default function RespMenu({user, handleLogOut, showMenu, handleSearch, onChange, keyword}){
    return (
        <ul className={`block lg:hidden absolute top-12 md:top-20 bg-secret-background p-2 right-1 shadow-2xl  ${showMenu ? '' : 'hidden' } rounded-lg w-36`}>
            <form
				className="  shadow-2xl shadow-black-200/40 flex bg-white rounded-lg overflow-hidden justify-between mb-2"
				onSubmit={handleSearch}
			  >
				<input
				  type="text"
				  value={keyword}
				  placeholder="Cari Kursus..."
				  onChange={onChange}
				  className="w-full px-1 py-1  placeholder:text-sm text-black outline-none"
				/>
				<button className="bg-secret-darkblue p-1">
				  <BiSearchAlt className="text-white" />
				</button>
			  </form>
			  {user ? (
				<div className="flex gap-5">
				  <div className="grid gap-2">
					<span className="font-bold mr-0 md:mr-4 text-sm">
					  HI, {user.name}
					</span>
					<Link
					  href="/my-courses"
					  className="flex items-center px-4 py-1 space-x-2 rounded-lg bg-secret-darkblue hover:scale-105 duration-300"
					>
					  <FiList className="text-white" size={16} />
					  <p className="font-semibold text-white">Kelas</p>
					</Link>
                    <div className="flex gap-2"> 
					<Link href="/profile/notification">
					  <FiBell className="text-secret-text hover:text-secret-text4" size={25} />
					</Link>
	
					<Link href="/profile">
					  <FiUser className="text-secret-text hover:text-secret-text4" size={25} />
					</Link>
                    </div>
	
					<button
					  className="text-center px-4 py-1 space-x-2 text-white font-bold rounded-lg bg-secret-pink hover:scale-105 duration-300 text-sm"
					  onClick={handleLogOut}
					>
					  Keluar
					</button>
				  </div>
				</div>
			  ) : (
				<li>
				  <Link href="/login">
					<button className="px-4 py-2 font-semibold text-white rounded-lg flex justify-center items-center gap-4 bg-secret-darkblue text-sm">
					  <CiLogin className="text-white text-sm" />
					  Masuk
					</button>
				  </Link>
				</li>
			  )}
			</ul>
    )
}
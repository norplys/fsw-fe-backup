"use client";

import { useEffect, useState, useRef } from "react";
import {  BiPlus } from "react-icons/bi";
import { EditForm } from "@/components/Admin/Course/EditForm";
import { CourseForm } from "@/components/Admin/Course/CourseForm";
import { useAdminCourses } from "@/app/utils/hooks/useAdminCourses";
import AdminCourses from "@/components/Admin/AdminCourses";
import PinkCircleLoading from "@/components/PinkCircleLoading";
import DeleteModal from "@/components/Admin/Course/DeleteModal";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const CoursesPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);


  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const search = searchParams.get("search");
  const editId = useRef(null);
  const deleteId = useRef(null);
  const { push } = useRouter();
  
  useEffect(() => {
    if(!search){
      params.delete("search");
      push(pathname + "?" + params.toString());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleDelete = (id) => {
    setIsDelete(true);
    deleteId.current = id;
  };

  const handleEdit = (id) => {
    setIsEdit(true);
    editId.current = id;
  };

  const [token, setToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const { data, isLoading, isError, error } = useAdminCourses(search);
  if (isLoading) return <PinkCircleLoading />;
  if (isError) return <div>{error.message}</div>;
  return (
    <>
    <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        </div>
      {/* </section> */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-5">
        <h1 className="md:text-xl font-bold text-black mb-4 md:mb-0">Kelola Kelas</h1>
        <div className="flex items-center space-x-0 md:space-x-3 mb-3 md:mb-0">
          <button
            className="flex items-center px-4 py-2 space-x-2 text-xs md:text-sm font-semibold border rounded-full text-secret-darkblue border-secret-darkblue"
            onClick={() => setIsOpen(true)}
          >
            <BiPlus className=" text-base md:text-xl mr-2" />
            Tambah Kelas
          </button>
        </div>
      </div>

      <div className="w-full mb-5 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-xs md:text-sm font-semibold leading-none tracking-wide text-gray-800 bg-secret-background h-10">
              <th className="w-1/7 min-w-[5rem] text-start px-5">Kode Kelas</th>
              <th className="w-1/7 min-w-[7rem] text-start px-5">Kategori</th>
              <th className="w-1/7 min-w-[12rem] text-start px-5">
                Nama Kelas
              </th>
              <th className="w-1/7 min-w-[5rem] text-start px-5">Tipe</th>
              <th className="w-1/7 min-w-[5rem] text-start px-5">Level</th>
              <th className="w-1/7 min-w-[7rem] text-start px-5">Harga</th>
              <th className="w-1/7 min-w-[12rem] text-start px-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data) => (
              <AdminCourses data={data} key={data.id} handleEdit={handleEdit} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
      <EditForm isOpen={isEdit} setIsOpen={setIsEdit} id={editId} token={token} />
      <CourseForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <DeleteModal isOpen={isDelete} setIsOpen={setIsDelete} id={deleteId} token={token} />
      </div>
    </>
  );
};

export default CoursesPage;

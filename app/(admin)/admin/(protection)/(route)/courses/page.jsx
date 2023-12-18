"use client";

import { useEffect, useState, useRef } from "react";
import { BiFilter, BiPlus, BiSearch } from "react-icons/bi";
import { EditForm } from "@/components/Admin/Course/EditForm";
import { CourseForm } from "@/components/Admin/Course/CourseForm";
import { useAdminCourses } from "@/app/utils/hooks/useAdminCourses";
import AdminCourses from "@/components/Admin/AdminCourses";
import PinkCircleLoading from "@/components/PinkCircleLoading";
import { AdminCard } from "@/components/Admin/AdminCard";

const dashboard = [
  {
    label: "Active User",
    count: "450",
    color: "bg-secret-pink",
  },
  {
    label: "Total Course",
    count: "25",
    color: "bg-secret-darkblue",
  },
  {
    label: "Premium Course",
    count: "20",
    color: "bg-secret-cyan",
  },
];

const CoursesPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const editId = useRef(null);
  const handleEdit = (id) => {
    setIsEdit(true);
    editId.current = id;
  };

  const [token, setToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { data, isLoading, isError, error } = useAdminCourses(token);
  if (isLoading) return <PinkCircleLoading />;
  if (isError) return <div>{error.message}</div>;
  return (
    <>
      <section className="py-5 xl:py-20">
        <div className="grid items-center grid-cols-1 gap-8 xl:grid-cols-3 mx-5">
          {dashboard?.map((item, index) => (
            <AdminCard statistic={item} key={index} />
          ))}
        </div>
      </section>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold text-black">Kelola Kelas</h1>
        <div className="flex items-center space-x-3">
          <button
            className="flex items-center px-4 py-2 space-x-2 text-sm font-semibold text-white rounded-full bg-secret-darkblue"
            onClick={() => setIsOpen(true)}
          >
            <BiPlus className="w-5 h-5 mr-2" />
            Tambah Kelas
          </button>
          <button className="flex items-center px-4 py-2 space-x-2 text-sm font-semibold border rounded-full text-secret-darkblue border-secret-darkblue">
            <BiFilter className="w-5 h-5 mr-2" />
            Filter
          </button>
          <button className="relative w-10 h-10 rounded-full hover:bg-secret-darkblue group">
            <BiSearch className="absolute w-5 h-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-secret-darkblue group-hover:text-white" />
          </button>
        </div>
      </div>

      <div className="w-full mb-5 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="w-full h-10 text-sm font-semibold leading-none tracking-wide text-gray-800 bg-secret-background">
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
          <tbody className="w-full">
            {data?.map((data) => (
              <AdminCourses data={data} key={data.id} handleEdit={handleEdit} />
            ))}
          </tbody>
        </table>
      </div>
      <EditForm isOpen={isEdit} setIsOpen={setIsEdit} id={editId} />
      <CourseForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default CoursesPage;

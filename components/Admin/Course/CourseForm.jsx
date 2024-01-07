"use client";

import { Fragment, useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { BiX, BiSolidTrash } from "react-icons/bi";
import { IconButton } from "@/components/Admin/IconButton";
import Module from "./ChapterModule";
import Image from "next/image";
import { useCategoriesData } from "@/app/utils/hooks/useCategoriesData";
import PinkCircleLoading from "@/components/PinkCircleLoading";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useQueryClient } from "react-query";
import { VscLoading } from "react-icons/vsc";

export const CourseForm = ({ isOpen, setIsOpen }) => {
  const { push } = useRouter();
  const { data : categoryData, isLoading, isError } = useCategoriesData();
  const queryClient = useQueryClient();
  const defaultValues = {
    nama: "",
    kategori: "",
    kode: "",
    telegram: "",
    intro: "",
    author: "",
    tipe: "",
    level: "",
    harga: 0,
    targetKelas: [" "],
    chapter: [
      {
        name: "",
        duration: 0,
        module: [{ title: "", video: "" }],
      },
    ],
    deskripsi: "",
    image: "",
    onboarding: "",
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    watch,
  } = useForm({
    defaultValues,
  });
  const [image, setImage] = useState(null);
  const imageFile = watch("image");
  const premium = watch("tipe");
  useEffect(() => {
    if (imageFile?.length === 0) {
      setImage(null);
      return;
    }
    if (imageFile) {
      const newUrl = URL.createObjectURL(imageFile[0]);

      if (newUrl !== image) {
        setImage(newUrl);
      }
    }
    return () => URL.revokeObjectURL(imageFile);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageFile]);

  const { fields, append, remove } = useFieldArray({
    name: "targetKelas",
    control,
    rules: {
      required: "Target Kelas harus diisi",
    },
  });

  function validateUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return "URL tidak valid";
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }
  const validate = {
    required: "Chapter Kelas harus diisi",
  }
  if(premium === 'true'){
    validate.minLength = {
      value: 2,
      message: "Chapter Kelas minimal 2",
    }
  }else{
    validate.minLength = {
      value: 1,
      message: "Chapter Kelas minimal 1",
    }
  }

  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    name: "chapter",
    control,
    rules: validate,
  });

  const removeImage = () => {
    setImage(null);
  };

  const formatData = (data) => {
    const defaultImage = categoryData.find((item) => item.id === Number(data.kategori)).image;
    const newCourseChapter = data.chapter.map((item) => {
      return {
        duration: item.duration,
        chapter: item.name,
        chapterModules: item.module.map((item2) => {
          return {
            title: item2.title,
            course_link: item2.video,
          };
        }),
      };
    });
    const newData = {
      course_category_id: data.kategori,
      image:
        imageFile?.length === 0 ? defaultImage : defaultImage, 
      name: data.nama,
      author: data.author,
      price: data.harga,
      level: data.level,
      rating: 5,
      isPremium: data.tipe,
      code: data.kode,
      intro_video: data.intro,
      courseDetail: {
        description: data.deskripsi,
        telegram: data.telegram,
        onboarding: data.onboarding,
        class_target: data.targetKelas,
      },
      courseChapters: newCourseChapter,
    };
    return newData;
  };

  const onSubmit = async (data) => {
    try {
      const newData = formatData(data);
      const res = axios.post(
        "https://api.academy-skillhub.com/v1/admin/courses",
        newData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      await toast.promise(res, {
        loading: "Loading...",
        error: "Gagal Menambah Kelas, Mohon Coba Lagi",
        success: "Berhasil Menambah Kelas",
      });
      queryClient.invalidateQueries("adminCourses");
      queryClient.invalidateQueries("paymentStatus");
      queryClient.invalidateQueries("adminStatistic");
      setIsOpen(false);
    } catch (err) {
      if (err.response.status === 401) {
        toast.error("Token Kadaluarsa, Mohon Login Kembali");
        push("/admin/login");
      } else if (err.response.status >= 500) {
        toast.error("Server Error, Mohon Coba Lagi");
      } else {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-base" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-screen-md p-5 xl:p-10 transition-all transform bg-white shadow-xl rounded-2xl max-h-[80vh] overflow-y-auto relative">
                <Dialog.Title
                  as="h3"
                  className="mb-5 md:text-xl font-bold text-center text-secret-darkblue"
                >
                  Tambah Kelas
                </Dialog.Title>

                <div className="absolute top-0 right-0 m-5">
                  <IconButton
                    icon={BiX}
                    variants="secondary"
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                {isLoading ? (
                  <PinkCircleLoading />
                ) : isError ? (
                  <div>Terjadi Kesalahan, Mohon Coba Kembali</div>
                ) : (
                  <form
                    className="w-full max-w-lg mx-auto flex flex-col justify-center"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="mb-4">
                      <label
                        htmlFor="nama"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Nama Kelas
                      </label>
                      <input
                        type="text"
                        placeholder="Nama Kelas"
                        className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none bg-slate-50'
												${errors.nama ? "border-red-500 " : ""}`}
                        {...register("nama", {
                          required: "Nama Kelas harus diisi",
                          minLength: {
                            value: 3,
                            message: "Nama Kelas minimal 3 karakter",
                          },
                          maxLength: {
                            value: 50,
                            message: "Nama Kelas maksimal 50 karakter",
                          },
                        })}
                      />
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.nama?.message}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="kategori"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Kategori
                      </label>
                      <select
                        className={`
												w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none'
												${errors.kategori ? "border-red-500 " : ""}`}
                        {...register("kategori", {
                          required: "Kategori harus diisi",
                        })}
                      >
                        <option value="" disabled>Pilih Kategori</option>
                        {categoryData?.map((item) => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.kategori?.message}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="kode"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Kode Kelas
                      </label>
                      <input
                        type="text"
                        placeholder="Kode"
                        className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.kode ? "border-red-500" : ""}`}
                        {...register("kode", {
                          required: "Kode harus diisi",
                        })}
                      />
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.kode?.message}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="telegram"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Link Telegram
                      </label>
                      <input
                        type="text"
                        placeholder="https://www.tele.com/"
                        className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.telegram ? "border-red-500" : ""}`}
                        {...register("telegram", {
                          required: "Telegram harus diisi",
                          validate: validateUrl,
                        })}
                      />
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.telegram?.message}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="intro"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Intro Video
                      </label>
                      <input
                        type="text"
                        placeholder="https://www.youtube.com/"
                        className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.intro ? "border-red-500" : ""}`}
                        {...register("intro", {
                          required: "Intro harus diisi",
                          validate: validateUrl,
                        })}
                      />
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.intro?.message}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="author"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Author
                      </label>
                      <input
                        type="text"
                        placeholder="Skillvoute"
                        className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.author ? "border-red-500" : ""}`}
                        {...register("author", {
                          required: "Author harus diisi",
                        })}
                      />
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.author?.message}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="tipe"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Tipe
                      </label>
                      <select
                        className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.tipe ? "border-red-500" : ""}`}
                        {...register("tipe", {
                          required: "Tipe harus diisi",
                        })}
                      >
                        <option value="" disabled>Pilih Tipe</option>
                        <option value="false">Gratis</option>
                        <option value="true">Premium</option>
                      </select>
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.tipe?.message}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="level"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Level
                      </label>
                      <select
                        className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none ',
												${errors.level ? "border-red-500" : ""}`}
                        {...register("level", {
                          required: "Level harus diisi",
                        })}
                      >
                        <option value="">Pilih Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.level?.message}
                      </span>
                    </div>

                    {premium === "true" ? (
                      <div className="mb-4">
                        <label
                          htmlFor="harga"
                          className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                        >
                          Harga
                        </label>
                        <input
                          type="number"
                          placeholder="Harga"
                          className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.harga ? "border-red-500" : ""}`}
                          {...register("harga", {
                            required: "Harga harus diisi",
                            min: {
                              value: 20000,
                              message: "Harga minimal 20000",
                            },
                            max: {
                              value: 1000000000,
                              message: "Harga maksimal 1000000000",
                            },
                          })}
                        />
                        <span
                          className="block mt-1 text-xs text-red-500"
                          role="alert"
                        >
                          {errors.harga?.message}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="mb-6">
                      <label
                        htmlFor="targetKelas"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Target Kelas
                      </label>
                      <button
                        type="button"
                        className="text-xs md:text-base font-bold text-white bg-secret-darkblue px-2 py-1 rounded-lg"
                        onClick={() => append(" ")}
                      >
                        Tambah Target Kelas
                      </button>
                      {fields.map((field, index) => (
                        <div
                          key={field.id}
                          className="flex space-x-2 my-2 flex-col gap-2"
                        >
                          <input
                            type="text"
                            placeholder="Target Kelas"
                            className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none '
							${errors?.targetKelas?.[index] ? "border-red-500" : ""}`}
                            {...register(`targetKelas.${index}`, {
                              required: "Target Kelas harus diisi",
                              minLength: {
                                value: 3,
                                message: "Target Kelas minimal 3 karakter",
                              },
                            })}
                          />
                          {errors?.targetKelas?.[index] && (
                            <p className="text-red-500 text-xs">
                              {errors.targetKelas?.[index]?.message}
                            </p>
                          )}
                          {index !== 0 ? (
                            <button
                              type="button"
                              className="text-xs md:text-base font-bold text-white bg-red-500 p-1 rounded-lg"
                              onClick={() => remove(index)}
                            >
                              Hapus Target Kelas
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                      <div className="text-red-500 text-xs mt-1">
                        {errors.targetKelas?.root?.message}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="chapter"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Chapter
                      </label>
                      <button
                        type="button"
                        className="text-xs md:text-base font-bold text-white bg-secret-darkblue px-2 py-1 rounded-lg"
                        onClick={() =>
                          append2([
                            {
                              name: "",
                              module: [{ title: "", video: "" }],
                            },
                          ])
                        }
                      >
                        Tambah Chapter
                      </button>
                      {fields2.map((field, index) => (
                        <div
                          key={field.id}
                          className="flex flex-col w-full  space-x-2 my-2"
                        >
                          <p className="font-semibold mb-2">
                            Chapter {index + 1}
                          </p>
                          <div className="flex flex-col gap-2">
                            <label>Nama Chapter</label>
                            <input
                              {...register(`chapter.${index}.name`, {
                                required: "Nama chapter wajib diisi",
                                minLength: {
                                  value: 3,
                                  message: "Nama chapter minimal 3 karakter",
                                },
                              })}
                              type="text"
                              placeholder="Nama Chapter"
                              className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none ${
                                errors.chapter?.[index]?.name
                                  ? "border-red-500"
                                  : ""
                              } `}
                            />
                            {errors.chapter?.[index]?.name && (
                              <p className="text-red-500 text-xs">
                                {errors.chapter?.[index]?.name?.message}
                              </p>
                            )}
                            <label>Durasi</label>
                            <input
                              {...register(`chapter.${index}.duration`, {
                                required: "Durasi Wajib Diisi",
                                min: {
                                  value: 1,
                                  message: "Durasi Minimal 1 Menit",
                                },
                              })}
                              type="number"
                              placeholder="60 Menit"
                              className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none ${
                                errors.chapter?.[index]?.duration
                                  ? "border-red-500"
                                  : ""
                              } `}
                            />
                            {errors.chapter?.[index]?.duration && (
                              <p className="text-red-500 text-xs">
                                {errors.chapter?.[index]?.duration?.message}
                              </p>
                            )}
                            {(index !== 0 && !premium) || (index > 1 && premium) ? (
                              <button
                                type="button"
                                className="text-xs md:text-base font-bold text-white bg-red-500 p-1 rounded-lg"
                                onClick={() => remove2(index)}
                              >
                                Hapus Chapter
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                          <div
                            key={field.id}
                            className="flex items-center space-x-2 my-2"
                          >
                            <Module
                              moduleIndex={index}
                              control={control}
                              register={register}
                              errors={errors}
                              premium={premium}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="text-red-500 text-xs mt-1">
                        {errors.chapter?.root?.message}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="onboarding"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Onboarding
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Onboarding..."
                        className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.onboarding ? "border-red-500" : ""}`}
                        {...register("onboarding", {
                          required: "Onboarding harus diisi",
                          minLength: {
                            value: 3,
                            message: "Onboarding minimal 3 karakter",
                          },
                          maxLength: {
                            value: 500,
                            message: "Onboarding maksimal 500 karakter",
                          },
                        })}
                      />
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.onboarding?.message}
                      </span>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="deskripsi"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Deskripsi
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Deskripsi..."
                        className={`w-full px-4 py-2 text-xs md:text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.deskripsi ? "border-red-500" : ""}`}
                        {...register("deskripsi", {
                          required: "Deskripsi harus diisi",
                          minLength: {
                            value: 3,
                            message: "Deskripsi minimal 3 karakter",
                          },
                          maxLength: {
                            value: 500,
                            message: "Deskripsi maksimal 500 karakter",
                          },
                        })}
                      />
                      <span
                        className="block mt-1 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.deskripsi?.message}
                      </span>
                    </div>
                    <div className="mb-6 ">
                      <label
                        htmlFor="image"
                        className="block mb-2 text-xs md:text-base font-semibold text-gray-700 "
                      >
                        Gambar
                      </label>
                      <div
                        className={`border border-gray-300 grid rounded-xl p-2`}
                      >
                        <div className="mb-2 flex gap-2">
                          <label
                            htmlFor="image"
                            className="bg-secret-darkblue font-bold text-white w-fit py-1 px-2 rounded-xl text-xs md:text-base"
                          >
                            Cari File...
                          </label>
                          {image && (
                            <button
                              onClick={removeImage}
                              className="text-secret-pink text-xl"
                            >
                              <BiSolidTrash />
                            </button>
                          )}
                        </div>
                        <input
                          type="file"
                          id="image"
                          placeholder="image"
                          className="hidden"
                          {...register("image")}
                        />
                        {image && (
                          <Image
                            src={image}
                            alt="image"
                            width={500}
                            height={500}
                            className="rounded-xl object-cover"
                          />
                        )}
                      </div>
                      
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="reset"
                        className={`w-full px-4 py-2 space-x-2 text-xs md:text-base font-semibold text-center border border-gray-300 rounded-full text-secret-darkblue ${isSubmitting ? "cursor-progress" : ""}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? <VscLoading className="animate-spin w-full text-lg md:text-xl font-bold"/> :  "Reset"}
                      </button>
                      <button
                        type="submit"
                        className={`w-full px-4 py-2 space-x-2 text-xs md:text-base font-semibold text-center text-white rounded-full bg-secret-darkblue ${isSubmitting ? "cursor-progress" : ""}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? <VscLoading className="animate-spin w-full text-lg md:text-xl font-bold"/> :  "Simpan"}
                      </button>
                    </div>
                  </form>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

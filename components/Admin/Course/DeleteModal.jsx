import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";
import {useQueryClient} from "react-query";
import toast from "react-hot-toast"; 

export default function DeleteModal({ isOpen, setIsOpen,  id, token }) {
  const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();

  const handleDelete = async () => {
    setLoading(true);
    try {
      setIsOpen(false);
      await axios.delete(`https://final-project-online-course.et.r.appspot.com/v1/admin/courses/${id.current}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
    queryClient.invalidateQueries("adminCourses");
      setIsOpen(false);
    } catch (error) {
      setLoading(false);
    toast.error(error.message);   
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
          <div className="fixed inset-0 bg-black/80"></div>
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                <Dialog.Title
                  as="h3"
                  className="mb-5 text-xl font-bold text-center"
                >
                  Are You Sure Want To Delete This Course?
                  <br />
                  <span className="bg-secret-red px-2 rounded-md text-white">
                    THIS ACTION CANNOT BE UNDONE !
                  </span>
                </Dialog.Title>

                <div className="flex items-center justify-center border-t-4 pt-3">
                  <section className="flex w-lg gap-7">
                    <button className="bg-secret-pink text-white rounded-xl font-bold px-2 text-lg " onClick={handleDelete}>Delete</button>
                    <button className="bg-secret-darkblue text-white rounded-xl font-bold px-2 text-lg" onClick={() => setIsOpen(false)}>Cancel</button>
                  </section>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

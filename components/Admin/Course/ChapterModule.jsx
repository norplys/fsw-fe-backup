import { useFieldArray } from "react-hook-form";

export default function Modul ({ moduleIndex, control, register }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `chapter.${moduleIndex}.module`
  });

  return (
    <div className="w-full grid gap-3">
      {fields.map((item, k) => {
        return (
          <div key={item.id} className="grid gap-2 w-full">
            <label className="text-base py-1 font-bold">Modul {k + 1}</label>
            <label>Title</label>
            <input
              {...register(`chapter.${moduleIndex}.module.${k}.title`, {
                required: true
              })}
              className='w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none'
            />
            <label>Video</label>
            <input {...register(`chapter.${moduleIndex}.module.${k}.video`)} className='w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none'/>
            <button type="button" onClick={() => remove(k)} className='text-base font-bold text-white bg-red-500 p-1 rounded-lg'>
              Hapus Modul
            </button>
          </div>
        );
      })}

      <button
        type="button"
        className="text-base font-bold text-white bg-green-500 p-1 rounded-lg"
        onClick={() =>
          append({
            title: " ",
            video: " "
          })
        }
      >
        Tambah Modul
      </button>

      <hr />
    </div>
  );
};

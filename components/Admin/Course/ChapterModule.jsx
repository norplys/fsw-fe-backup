import { useFieldArray } from "react-hook-form";

export default function Module ({ moduleIndex, control, register, errors}) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `chapter.${moduleIndex}.module`
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
  return (
    <div className="w-full grid gap-3">
      {fields.map((item, k) => {
        return (
          <div key={item.id} className="grid gap-2 w-full">
            <label className="text-xs md:text-base py-1 font-semibold">Modul {k + 1}</label>
            <label className="text-xs md:text-base">Judul Modul</label>
            <input
              {...register(`chapter.${moduleIndex}.module.${k}.title`, {
                required: "Judul modul tidak boleh kosong"
              })}
              placeholder="Judul Modul"
              className={`w-full px-4 py-2 text-xs md:text-base border rounded-xl ${errors?.chapter?.[moduleIndex]?.module?.[k]?.title ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors?.chapter?.[moduleIndex]?.module?.[k]?.title && <p className='text-red-500 text-xs'>{errors?.chapter?.[moduleIndex]?.module?.[k]?.title?.message}</p>}
            <label className="text-xs md:text-base">Video</label>
            <input {...register(`chapter.${moduleIndex}.module.${k}.video`, {
              required: "URL video tidak boleh kosong",
              validate: validateUrl
            }) } 
            placeholder="URL Video"
            className={`w-full px-4 py-2 text-xs md:text-base border rounded-xl ${errors?.chapter?.[moduleIndex]?.module?.[k]?.video ? 'border-red-500' : 'border-gray-300'}`}/>
            {errors?.chapter?.[moduleIndex]?.module?.[k]?.video && <p className='text-red-500 text-xs'>{errors?.chapter?.[moduleIndex]?.module?.[k]?.video?.message}</p>}
            {k !== 0 ? <button type="button" onClick={() => remove(k)} className='text-xs md:text-base font-bold text-white bg-red-500 p-1 rounded-lg'>
              Hapus Modul
            </button> : 
            ''}
          </div>
        );
      })}
      <button
        type="button"
        className="text-xs md:text-base font-bold text-white bg-green-500 p-1 rounded-lg"
        onClick={() =>
          append({
            title: " ",
            video: " "
          })
        }
      >
        Tambah Modul
      </button>
    </div>
  );
};

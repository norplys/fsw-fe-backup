export default function AdminCourses({data, handleEdit, handleDelete}) {
    const currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(number);
    };
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
  return (
    <tr
      key={data.id}
      className="w-full h-16 text-sm leading-none text-gray-800 bg-white border-t border-b border-gray-100 hover:bg-gray-100"
    >
      <td className="px-5 text-start text-xs md:text-base">
        <span className="font-semibold">{data.classCode}</span>
      </td>
      <td className="px-5 text-start text-xs md:text-base">{data.category}</td>
      <td className="px-5 text-start text-xs md:text-base">
        <span className="font-semibold">{data.name}</span>
      </td>
      <td className="px-5 text-start text-xs md:text-base">
        <span
          className={`font-bold uppercase ${
            data?.isPremium ? "text-secret-darkblue" : "text-secret-pink"
          }`}
        >
          {data?.isPremium ? "Premium" : "Gratis"}
        </span>
      </td>
      <td className="px-5 text-start text-xs md:text-base">{capitalize(data.level)}</td>
      <td className="px-5 text-start text-xs md:text-base">{currency(data.price)}</td>
      <td className="px-5 text-start text-xs md:text-base">
        <div className="inline-flex items-center justify-center space-x-2">
          <button className="px-4 py-1 text-xs md:text-sm font-semibold text-white rounded-full bg-secret-darkblue" onClick={() => handleEdit(data.id)}>
            Ubah
          </button>
          <button className="px-4 py-1 text-xs md:text-sm font-semibold text-white rounded-full bg-secret-pink" onClick={() => handleDelete(data.id)}>
            Hapus
          </button>
        </div>
      </td>
    </tr>
  );
}

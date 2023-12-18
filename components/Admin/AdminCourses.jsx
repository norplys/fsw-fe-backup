export default function AdminCourses({data, handleEdit}) {
    const currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };
  return (
    <tr
      key={data.id}
      className="w-full h-16 text-sm leading-none text-gray-800 bg-white border-t border-b border-gray-100 hover:bg-gray-100"
    >
      <td className="px-5 text-start">
        <span className="font-semibold">{data.code}</span>
      </td>
      <td className="px-5 text-start">{data.course_category.name}</td>
      <td className="px-5 text-start">
        <span className="font-semibold">{data.name}</span>
      </td>
      <td className="px-5 text-start">
        <span
          className={`font-bold uppercase ${
            data.premium ? "text-secret-darkblue" : "text-secret-pink"
          }`}
        >
          {data.premium ? "Premium" : "Gratis"}
        </span>
      </td>
      <td className="px-5 text-start">{data.difficulty}</td>
      <td className="px-5 text-start">{currency(data.price)}</td>
      <td className="px-5 text-start">
        <div className="inline-flex items-center justify-center space-x-2">
          <button className="px-4 py-1 text-sm font-semibold text-white rounded-full bg-secret-darkblue" onClick={() => handleEdit(data.id)}>
            Ubah
          </button>
          <button className="px-4 py-1 text-sm font-semibold text-white rounded-full bg-secret-pink">
            Hapus
          </button>
        </div>
      </td>
    </tr>
  );
}

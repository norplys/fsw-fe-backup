export default function PaymentLoading() {
  return (
    <tr
      className="w-full h-16 text-sm leading-none text-gray-800 bg-white border-t border-b border-gray-100"
    >
      <td className="px-5">
        <div className="w-full bg-secret-cyan text-secret-cyan rounded-lg animate-pulse">.</div>
      </td>
      <td className="px-5"><div className="w-full bg-secret-pink text-sebg-secret-pink rounded-lg animate-pulse">.</div></td>
      <td className="px-5">
        <span className="font-semibold"><div className="w-full bg-secret-cyan text-secret-cyan rounded-lg animate-pulse">.</div></span>
      </td>
      <td className="px-5">
      <div className="w-full bg-secret-pink text-sebg-secret-pink rounded-lg animate-pulse">.</div>
      </td>
      <td className="px-5"><div className="w-full bg-secret-cyan text-secret-cyan rounded-lg animate-pulse">.</div></td>
      <td className="px-5"><div className="w-full bg-secret-pink text-sebg-secret-pink rounded-lg animate-pulse">.</div></td>
    </tr>
  );
}


export default function Otp({
  register,
  errors,
  index,
  handleChange,
  handleBackspace,
  reference,
}) {

  const {ref} = register(`Otp${index}`)

  return (
    <input
      {...register(`Otp${index}`, {
        required: true,
        maxLength: 1,
        pattern: { value: /[0-9]/, message: "Kode OTP harus berupa angka" },

        onChange : (e) => handleChange(e.target.value, index),

      })}
      maxLength={1}
      type="tel"
      placeholder="0"
      className={`${
        errors[`Otp${index}`] ? "border-red-500" : ""
      } border-2 rounded-2xl w-full text-center p-2 text-black mt-4 shadow-2xl focus:shadow-none focus:outline-none placeholder:text-center`}
      ref={(e) => {
        ref(e)
        reference.current[index] = e
      }}
      onKeyUp = {(e) => handleBackspace(index, e)}

    />
  );
}


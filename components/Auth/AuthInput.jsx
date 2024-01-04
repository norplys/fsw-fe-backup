export default function AuthInput({
  name,
  type,
  placeholder,
  id,
  register,
  errors,
  isSubmitting,
  watch,
}) {
  const validation = {
    required: `Mohon Isi Kolom Ini`,
  };
  if (id === "email") {
    validation.pattern = {
      value: /\S+@\S+\.\S+/,
      message: "Mohon Masukkan Email Yang Valid",
    };
  }
  if (id === "password1") {
    validation.minLength = {
      value: 8,
      message: "Password Minimal 8 Karakter",
    };
  }
  if (id === "password2") {
    validation.minLength = {
      value: 8,
      message: "Password Minimal 8 Karakter",
    };
    validation.validate = (value) =>
      value === watch("password1") || "Password Tidak Sama";
  }
  if (id === "password") {
    validation.minLength = {
      value: 8,
      message: "Password Minimal 8 Karakter",
    };
  }
  return (
    <div className="mb-4 lg:mb-8">
      <label htmlFor={id} className=" font-bold text-secret-text text-sm md:text-base">
        {name}
      </label>
      <input
        {...register(id, validation)}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={`border-2 rounded-2xl w-full p-2 text-secret-text col-span-2 mt-4 text-sm md:text-base shadow-2xl ${
          errors[id] ? "border border-red-500" : ""
        } focus:shadow-none focus:outline-none`}
        disabled={isSubmitting}
      />
      {errors[id] && <p className="text-red-600">{errors[id].message}</p>}
    </div>
  );
}

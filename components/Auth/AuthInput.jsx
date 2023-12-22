export default function AuthInput({name, type, placeholder, id, register, errors}){
    const validation = {
        required: `Please Fill This Form`
    }
    if(id === "phone"){
        validation.pattern = {
            value: /^(\+62|62|0)[8]{1}[0-9]{7,11}$/,
            message: "Please Enter Valid Phone Number"
        }
    }
    if(id === "email"){
        validation.pattern = {
            value: /\S+@\S+\.\S+/,
            message: "Please Enter Valid Email"
        }
    }
    if(id === "password"){
        validation.minLength = {
            value: 8,
            message: "Password Must Be At Least 8 Characters"
        }
    }
    return (
        <div className='mb-4 lg:mb-8'>
            <label htmlFor={id} className=" font-bold text-secret-text">{name}</label>
            <input
              {...register(id, validation
              )}
              type={type}
              name={id}
              id={id}
              placeholder={placeholder}
              className={`border-2 rounded-2xl w-full p-2 text-secret-text col-span-2 mt-4 shadow-2xl ${errors[id] ? 'border border-red-500' : ''} focus:shadow-none focus:outline-none`}
            />
            {errors[id] && <p className="text-red-600">{errors[id].message}</p>}
          </div>
    )
}

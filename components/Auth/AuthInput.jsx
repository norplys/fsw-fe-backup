export default function AuthInput({name, type, placeholder, id}){
    return (
        <div className="mb-4 lg:mb-8">
            <label htmlFor={id} className=" font-bold text-secret-text">{name}</label>
            <input
              type={type}
              name={id}
              id={id}
              placeholder={placeholder}
              className="border-2 rounded-2xl w-full p-2 text-secret-text col-span-2 mt-4 shadow-2xl focus:shadow-none focus:outline-none"
              required
            />
          </div>
    )
}

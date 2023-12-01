export default function FilterOption({ name}) {
    return (<div className="grid grid-cols-4 justify-center items-center">
            <input 
              type="checkbox"
              id="paling_baru"
              className=" colspan-1 border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill h-6"
              value="paling_baru"
            />
            <label htmlFor="paling_baru" className=" col-span-3 text-black text-sm">
              {name}
            </label>
    </div>
    )
}

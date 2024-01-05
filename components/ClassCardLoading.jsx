export default function ClassCardLoading() {
  return (
    <div className="animate-pulse grid gap-3  h-60 flex-1 shadow-2xl scale-90">
      <div className="flex-1">
        <div className="h-20 bg-secret-cyan rounded "></div>
      </div>
      <div className="grid grid-cols-12 grid-rows-5 gap-2 p-3">
        <div className="h-2 bg-secret-pink rounded col-span-5"></div>
        <div className="h-2 bg-secret-pink rounded col-start-11 col-span-1"></div>
        <div className="h-2 bg-secret-pink rounded row-start-2 col-span-7"></div>
        <div className="h-2 bg-secret-pink rounded row-start-3 col-span-4"></div>
        <div className="h-2 bg-secret-pink rounded col-start-1 row-start-4 col-span-3"></div>
        <div className="h-2 bg-secret-pink rounded col-start-5 row-start-4 col-span-3"></div>
        <div className="h-2 bg-secret-pink rounded col-start-9 row-start-4 col-span-3"></div>
        <div className="h-4 bg-secret-pink rounded col-start-1 row-start-5 col-span-5"></div>
      </div>
    </div>
  );
}

export default function Shimmer() {
  <div className="flex flex-wrap gap-10 p-10">
    {Array(8)
      .fill("")
      .map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 rounded-2xl w-1/5 h-80 m-auto border-2 border-blue-100 flex flex-col justify-center items-center"
        >
          <div className="bg-gray-300 rounded-xl w-4/5 h-40 mb-4"></div>
          <div className="bg-gray-300 h-6 w-3/5 mb-2 rounded"></div>
          <div className="bg-gray-300 h-4 w-2/5 mb-2 rounded"></div>
          <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded"></div>
          <div className="bg-gray-300 h-8 w-4/5 rounded"></div>
        </div>
      ))}
  </div>;
}

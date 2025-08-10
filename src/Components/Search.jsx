export default function Search({ keyword, onChange }) {
  return (
    <>
      <div className="w-3/4 m-auto border p-1 flex justify-between mt-6">
        <input
          className="w-4/5 p-2"
          type="search"
          value={keyword}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Find Your Favorite restaurants here"
        />
        <span className="flex items-center p-2">🔍</span>
      </div>
    </>
  );
}

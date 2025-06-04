export default function BlogCard( {title, summary, created_at,author}){
    return (
    <div className="col-span-12 md:col-span-4  font-roboto lg:col-span-3 shadow-lg p-4 border border-gray-400 rounded-3xl hover:bg-gray-200 cursor-pointer">
      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-700">{summary}</p>
      </div>
      <div className="flex gap-4">
        <p className="font-mono text-gray-700">{author} - </p>
        <p>{created_at}</p>
      </div>
    </div>
    );
}
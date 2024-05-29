export default function Cardd({ name, date, id, video, category }) {
  return (
    <div
      id={id}
      className="w-[300px] h-[260px] shadow-2xl rounded-md dark:bg-gray-800"
    >
    <video id='vid' controls>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
   </video>
   <div className="flex flex-col justify-between">
      <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white w-[300px] truncate">
      <span>{name}</span>
      </h6>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {date}
      </p>
    </div>
    <div className="pl-[12rem] pt-[10px]">
    <span className="bg-white text-gray-700 text-xs font-medium rounded px-2.5 py-0.5 dark:text-gray-800 border-2 dark:border-0 border-gray-600">{category}</span>
  </div>
  </div>
  )
}
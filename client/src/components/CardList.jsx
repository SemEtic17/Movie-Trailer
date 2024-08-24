import Card from "./Card";

export default function CardList({ posts, showMore, handleShowMore }) {
  return (
    <div className="flex flex-wrap gap-4 p-1 md:w-[1350px] ml-[4%] md:ml-[0px] lg:ml-[0px] xl:ml-[0px]">
      {posts.map((post) => (
        <Card
          key={post._id}
          name={post.name}
          date={post.date}
          video={post.video}
          id={post.id}
          category={post.category}
        />
      ))}
      {showMore && (
        <button
          onClick={handleShowMore}
          className="text-teal-500 text-lg hover:underline p-7 w-full"
        >
          Show More
        </button>
      )}
    </div>
  );
}

import Card from './Card';

export default function CardList(  {Data} ) {
  return (
    <div className="flex flex-wrap gap-4 p-1 md:w-[1350px]">  
    { 
      Data.map((user, i) =>{
        return (
        <Card 
          key={i} 
          id={Data[i].id} 
          name={Data[i].name} 
          date={Data[i].date} 
          video={Data[i].video}
          category={Data[i].category} />
        );
      })
    }
    </div>
  )
}

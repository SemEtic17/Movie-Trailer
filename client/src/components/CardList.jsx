import Card from './Card';

export default function CardList(  {Data} ) {
  return (
    <div>  
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

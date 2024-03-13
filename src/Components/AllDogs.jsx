import SmallDogCard from "./SmallDogCard";

export default function AllDogs(props) {
	const allDogs = props.dogs;
	
  return (
	<section className="allDogsContainer">
		<h2>All the dogs</h2>
		<section className="allDogsCards">
			{allDogs.map((dog, i) => <SmallDogCard dog={dog} key={i}/>)}
		</section>
	</section>
  )
}

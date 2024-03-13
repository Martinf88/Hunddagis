import './smallDogCard.css'

export default function SmallDogCard(props) {
	const dog = props.dog;
  return (
	<article>
		<figure className="dog-image" style={{backgroundImage: `url(${dog.img})`}}>
		</figure>
		<section className="dog-info">
			<p>{dog.name}</p>
			{dog.present ? <p>Is here</p> : <p>Is at home</p>}
		</section>
	</article>
  )
}

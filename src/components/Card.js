function Card({exercise}) {
	return (
		<article>
			<h2>{exercise.name}</h2>
			<h3>{exercise.sanscritName}</h3>
			<p>{exercise.about}</p>
			<hr />
		</article>
	);
}

export default Card;

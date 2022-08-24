import Link from 'next/link';

function Card({exercise}) {
	console.log(exercise.id);
	return (
		<article>
			<h2>{exercise.name}</h2>
			<h3>{exercise.sanscritName}</h3>
			<p>{exercise.about}</p>
			<Link href={`/wirkung/${exercise.id}`}>
				<a>wirkung</a>
			</Link>

			<hr />
		</article>
	);
}

export default Card;

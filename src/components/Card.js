import Link from 'next/link';
function Card({exercise}) {
	return (
		<article>
			<h2>{exercise.name}</h2>
			<h3>{exercise.sanscritName}</h3>
			<p>{exercise.about}</p>
			<Link href={{pathname: '/effects', query: {keyword: exercise.id}}}>
				<a>effects</a>
			</Link>
			<hr />
		</article>
	);
}

export default Card;

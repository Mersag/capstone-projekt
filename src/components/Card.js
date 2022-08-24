import Link from 'next/link';

import useStore from '../hooks/useStore';

function Card({exercise}) {
	const addRoutine = useStore(state => state.addRoutine);
	return (
		<article>
			<h2>{exercise.name}</h2>
			<h3>{exercise.sanscritName}</h3>
			<p>{exercise.about}</p>
			<Link href={{pathname: '/wirkung', query: {keyword: exercise.id}}}>
				<a>wirkung</a>
			</Link>
			<button
				onClick={() => {
					addRoutine(exercise.id);
				}}
				type="button"
			>
				add
			</button>
			<hr />
		</article>
	);
}

export default Card;

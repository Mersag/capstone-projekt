import Link from 'next/link';

import useStore from '../hooks/useStore';

function CardHome({exercise}) {
	const addRoutine = useStore(state => state.addRoutine);
	return (
		<article>
			<h2>{exercise.name}</h2>
			<h3>{exercise.sanscritName}</h3>
			<p>{exercise.about}</p>
			<Link href={`/wirkung/${exercise.id}`}>
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

export default CardHome;

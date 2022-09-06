import Image from 'next/image';
import Link from 'next/link';

import useStore from '../hooks/useStore';

function CardRoutine({exercise}) {
	const deleteRoutine = useStore(state => state.deleteRoutine);
	return (
		<article>
			<Image
				src={exercise.image}
				alt={exercise.alt}
				width={exercise.width}
				height={exercise.height}
			></Image>
			<h2>{exercise.name}</h2>
			<h3>{exercise.sanscritName}</h3>
			<p>{exercise.about}</p>
			<Link href={`/wirkung/${exercise.id}`}>
				<a>wirkung</a>
			</Link>
			<button
				onClick={() => {
					deleteRoutine(exercise.id);
				}}
			>
				delete routine
			</button>
			<hr />
		</article>
	);
}

export default CardRoutine;

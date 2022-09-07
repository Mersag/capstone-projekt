import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import useStore from '../hooks/useStore';

import StyledButton from './Button/StyledButton';
import StyledCard from './Card/StyledCard';
import StyledContainer from './Card/StyledContainer';

function CardHome({exercise}) {
	const routine = useStore(state => state.routine);
	const addRoutine = useStore(state => state.addRoutine);
	return (
		<StyledContainer>
			<StyledCard>
				<h2>{exercise.name}</h2>
				<Image
					src={exercise.image}
					alt={exercise.alt}
					width={exercise.width}
					height={exercise.height}
				></Image>
				<StyledHeader>{exercise.sanscritName}</StyledHeader>
				<p>{exercise.about}</p>

				<Link href={`/wirkung/${exercise.id}`}>
					<a>
						<StyledButton>WIRKUNG</StyledButton>
					</a>
				</Link>

				<StyledButton
					disabled={routine.filter(routine => routine.id === exercise.id).length}
					onClick={() => {
						addRoutine(exercise);
					}}
					type="button"
				>
					ADD TO ROUTINE
				</StyledButton>
			</StyledCard>
		</StyledContainer>
	);
}

export default CardHome;

const StyledHeader = styled.h3`
	color: #83c5be;
`;

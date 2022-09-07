import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import useStore from '../hooks/useStore';

import StyledButton from './Button/StyledButton';
import StyledCard from './Card/StyledCard';
import StyledContainer from './Card/StyledContainer';

function CardRoutine({exercise}) {
	const deleteRoutine = useStore(state => state.deleteRoutine);
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
					onClick={() => {
						deleteRoutine(exercise.id);
					}}
				>
					DELETE
				</StyledButton>
			</StyledCard>
		</StyledContainer>
	);
}

export default CardRoutine;

const StyledHeader = styled.h3`
	color: #83c5be;
`;

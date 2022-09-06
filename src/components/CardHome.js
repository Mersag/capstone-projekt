import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import useStore from '../hooks/useStore';

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
				<h3>{exercise.sanscritName}</h3>
				<p>{exercise.about}</p>
				<StyledContainer>
					<Link href={`/wirkung/${exercise.id}`}>
						<a>
							<StyledButton>wirkung</StyledButton>
						</a>
					</Link>

					<StyledButton
						disabled={routine.filter(routine => routine.id === exercise.id).length}
						onClick={() => {
							addRoutine(exercise);
						}}
						type="button"
					>
						Add to Routine
					</StyledButton>
				</StyledContainer>
			</StyledCard>
		</StyledContainer>
	);
}

export default CardHome;

const StyledButton = styled.button`
	margin: 10px;
	padding: 5px;
	border: 1px solid black;
	background-color: #83c5be;
	color: white;
	font-weight: 600;
	&:hover {
		cursor: pointer;
	}
`;
const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;
	gap: 20px;
`;

const StyledCard = styled.article`
	width: 80vw;
	height: auto;
`;

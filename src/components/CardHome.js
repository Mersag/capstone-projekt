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
	gap: 200px;
`;

const StyledCard = styled.li`
	position: relative;
	width: 250px;
	height: 132%;
	margin-bottom: 60px;
	border-radius: 20px;
	background-color: var(--plainWhite);
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.25);
	list-style: none;
`;

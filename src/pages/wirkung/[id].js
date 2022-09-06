import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import {db} from '../../db';
import useStore from '../../hooks/useStore';

export default function WirkungPage() {
	const routine = useStore(state => state.routine);
	const addRoutine = useStore(state => state.addRoutine);
	const router = useRouter();
	const {id} = router.query;
	const entry = db.find(entry => entry.id === Number(id));

	if (!entry) {
		return;
	}

	return (
		<Layout>
			<Head>
				<title key="title">Wirkung</title>
				<meta key="description" name="description" content="wirkung" />
			</Head>
			<h1>{entry.name}</h1>
			<Image
				src={entry.image}
				alt={entry.alt}
				width={entry.width}
				height={entry.height}
			></Image>
			<h2>Wirkung</h2>
			<div>
				<ul style={{listStyle: 'none', marginLeft: -40}}>
					{entry.wirkung.map(wirkung => (
						<li key={wirkung.wirkung}>
							<h3>{wirkung.wirkung}:</h3>
							{wirkung.text}
						</li>
					))}
				</ul>
			</div>

			<StyledButton
				disabled={routine.filter(routine => routine.id === Number(id)).length}
				onClick={() => {
					addRoutine(entry);
				}}
				type="button"
			>
				add to Routine
			</StyledButton>
		</Layout>
	);
}

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

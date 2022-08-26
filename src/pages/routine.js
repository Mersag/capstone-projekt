import Head from 'next/head';

import CardRoutine from '../components/CardRoutine';
import Layout from '../components/Layout';
import useStore from '../hooks/useStore';

export default function Routine() {
	const routine = useStore(state => state.routine);
	return (
		<Layout>
			<Head>
				<title key="title">Routine</title>
				<meta key="description" name="description" content="Routine" />
			</Head>
			<h1>Routine</h1>
			{routine.map(exercise => (
				<CardRoutine key={exercise.id} exercise={exercise} id={exercise.id} />
			))}
		</Layout>
	);
}

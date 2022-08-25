import Head from 'next/head';

import CardRoutine from '../components/CardRoutine';
import Layout from '../components/Layout';
import {db} from '../db';
import useStore from '../hooks/useStore';

export default function Routine() {
	const routine = useStore(state => state.routine);
	console.log(routine);
	return (
		<Layout>
			<Head>
				<title key="title">Routine</title>
				<meta key="description" name="description" content="Routine" />
			</Head>
			<h1>Routine</h1>
			{db
				.filter(exercise => routine.includes(exercise.id))
				.map(exercise => (
					<CardRoutine key={exercise.id} exercise={exercise} />
				))}
		</Layout>
	);
}

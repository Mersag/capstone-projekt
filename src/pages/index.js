import Head from 'next/head';

import CardHome from '../components/CardHome';
import Layout from '../components/Layout';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const exercises = useStore(state => state.exercises);
	return (
		<Layout>
			<Head>
				<title key="Yoga App"></title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			<h1>Asanas</h1>

			{exercises.map(exercise => {
				return <CardHome key={exercise.id} exercise={exercise} />;
			})}
		</Layout>
	);
}

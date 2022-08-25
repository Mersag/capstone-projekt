import Head from 'next/head';

import CardHome from '../components/CardHome';
import Layout from '../components/Layout';
import {db} from '../db';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="Yoga App"></title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			<h1>Asanas</h1>

			{db.map(exercise => {
				return <CardHome key={exercise.id} exercise={exercise} />;
			})}
		</Layout>
	);
}

import Head from 'next/head';

import Card from '../components/Card';
import Layout from '../components/Layout';
import {db} from '../db';

//import Effects from './effects';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="Yoga App"></title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			<h1>Asanas</h1>

			{db.map(exercise => {
				return <Card key={exercise.id} exercise={exercise} />;
			})}
		</Layout>
	);
}

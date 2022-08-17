import Head from 'next/head';

import Card from '../components/Card';
import Layout from '../components/Layout';
import {db} from '../db';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			<h1>Exercises</h1>

			{db.map(exercise => {
				return <Card key={exercise.id} exercise={exercise} />;
			})}
		</Layout>
	);
}

import Head from 'next/head';

import Layout from '../components/Layout';
import {db} from '../db';

export default function HomePage() {
	console.log(db.map(exercise => exercise.name));
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Home</h1>
		</Layout>
	);
}

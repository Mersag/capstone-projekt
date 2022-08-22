import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

import Layout from '../components/Layout';
import {db} from '../db';

export default function WirkungPage() {
	const router = useRouter();
	const [ids, setId] = useState(0);
	useEffect(() => {
		setId(router.query.keyword);
	}, [router.query]);

	const entry = db.find(entry => entry.id === Number(ids));
	console.log(entry);
	return (
		<Layout>
			<Head>
				<title key="title">Wirkung</title>
				<meta key="description" name="description" content="Wirkung" />
			</Head>
			<h1>Wirkung</h1>
			<div>
				<ul>
					{entry.wirkung.map(wirkung => (
						<li key={wirkung.wirkung}>
							<h2>{wirkung.wirkung}:</h2>
							{wirkung.text}
						</li>
					))}
				</ul>
			</div>
			<button onClick>auswählen</button>
		</Layout>
	);
}

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
	return (
		<Layout>
			<Head>
				<title key="title">Wirkung</title>
				<meta key="description" name="description" content="Wirkung" />
			</Head>
			<h1>Wirkung</h1>
			<div>
				{db
					.filter(entry => entry.id === Number(ids))
					.map(entry => {
						return (
							<ul key={entry.name}>
								{entry.wirkung.map(wirkung => (
									<ul key={wirkung}>{wirkung.wirkung}</ul>
								))}
							</ul>
						);
					})}
				<button>auswählen</button>
			</div>
		</Layout>
	);
}

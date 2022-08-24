import Head from 'next/head';
import {useRouter} from 'next/router';

import Layout from '../../components/Layout';
import {db} from '../../db';

export default function WirkungPage() {
	const router = useRouter();
	const {id} = router.query;
	const entry = db.find(entry => entry.id === Number(id));
	console.log(entry);

	if (!entry) {
		return;
	}

	return (
		<Layout>
			<Head>
				<title key="title">Wirkung</title>
				<meta key="description" name="description" content="wirkung" />
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
		</Layout>
	);
}

import Link from 'next/link';
import {useRouter} from 'next/router';

import StyledNavLink from './StyledNavLink';

export default function NavLink({path, children}) {
	const {asPath} = useRouter();
	return (
		<Link href={path}>
			<StyledNavLink active={asPath === path}>{children}</StyledNavLink>
		</Link>
	);
}

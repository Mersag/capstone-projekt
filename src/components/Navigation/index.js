import NavLink from '../NavLink';
import SVG from '../NavLink/Svg';

import StyledNav from './StyledNav';

export default function Nav() {
	return (
		<StyledNav>
			<NavLink path={'/'}>
				<SVG variant="yogi" color="white" size="30px" />
				Home
			</NavLink>
			<NavLink path={'/routine'}>
				<SVG variant="mat" color="white" size="30px" />
				Routine
			</NavLink>
		</StyledNav>
	);
}

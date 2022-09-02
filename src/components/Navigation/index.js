import NavLink from '../NavLink';
import Svg from '../NavLink/Svg';

import StyledNav from './StyledNav';

export default function Nav() {
	return (
		<StyledNav>
			<NavLink path={'/'}>
				<Svg variant="yogi" color="white" size="30px" />
				Home
			</NavLink>
			<NavLink path={'/routine'}>
				<Svg variant="mat" color="white" size="30px" />
				Routine
			</NavLink>
		</StyledNav>
	);
}

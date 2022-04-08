import Link from 'next/link'
import React from 'react'
import styles from './nav-bar.module.css'

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<nav className={styles.navBar}>
			<div className={styles.navLink}>
				<Link href='/portfolio'>portfolio.</Link>
			</div>
		</nav>
	)
}

export default NavBar

import { useState } from 'react';
import DarkMode from './DarkMode';

function getInitialMode() {
	if (typeof localStorage == 'undefined') {
		return false;
	}
	const isReturningUser = 'darkMode' in localStorage;
	const savedMode = JSON.parse(localStorage.getItem('darkMode'));
	const userPrefersDark = getPrefColorScheme();

	// if mode was saved -> dark / light
	if (isReturningUser) {
		return savedMode;
	}
	// if preferred color scheme is dark -> dark
	else if (userPrefersDark) {
		return true;
	}
	// otherwise -> light
	else {
		return false;
	}
}

function getPrefColorScheme() {
	if (!window.matchMedia) return;

	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const ThemeSwitch = () => {
	const [darkMode, setDarkMode] = useState(getInitialMode);

	function toggleDarkMode() {
		localStorage.setItem('darkMode', JSON.stringify(!darkMode));
		setDarkMode(!darkMode);
	}

	return (
		<>
			<button onClick={toggleDarkMode} suppressHydrationWarning>
				{darkMode ? 'Light Mode' : 'Dark Mode'}
			</button>
			<style jsx>{`
				button {
					background: none;
					color: inherit;
					border: none;
					padding: 0.5em 1em;
					border-radius: 0.25em;
					cursor: pointer;
				}
			`}</style>
			{darkMode && <DarkMode />}
		</>
	);
};

export default ThemeSwitch;
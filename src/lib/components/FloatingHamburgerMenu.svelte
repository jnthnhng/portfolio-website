<script>
	import { onMount } from 'svelte';
	import NavBar from './NavBar.svelte';
	import InlineHamburgerMenu from '$lib/assets/InlineHamburgerMenu.svg';

	let isMenuHidden = true;

	onMount(() => {
		const menuButton = document.getElementById('menuButton');
		const navigationMenu = document.getElementById('navigationMenu');

		if (menuButton && navigationMenu) {
			menuButton.addEventListener('click', () => {
				isMenuHidden = !isMenuHidden;
			});
		}
	});
</script>

<div class="fixed right-4 top-1 z-50">
	<button
		id="menuButton"
		class="rounded border border-solid border-white bg-greenCream-resumeButtonBg p-2"
	>
		<i class="fas fa-bars" />
		<img class="btn-square btn-xs" src={InlineHamburgerMenu} sizes="10px" alt="up arrow" />
	</button>
</div>

<div id="navigationMenu" class={isMenuHidden ? 'hidden' : ''}>
	<NavBar />
</div>

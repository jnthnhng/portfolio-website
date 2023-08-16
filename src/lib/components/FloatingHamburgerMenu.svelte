<script>
	import { onMount } from 'svelte';
	import NavBar from './NavBar.svelte';
	import InlineHamburgerMenu from './InlineHamburgerMenu.svelte';

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

<div class="fixed bottom-4 right-4 z-50">
	<button id="menuButton" class="rounded bg-gray-900 p-2 text-white">
		<i class="fas fa-bars" />
        <InlineHamburgerMenu />
	</button>
</div>

<div id="navigationMenu" class={isMenuHidden ? 'hidden' : ''}>
	<NavBar />
</div>

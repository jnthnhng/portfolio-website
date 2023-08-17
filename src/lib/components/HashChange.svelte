<!-- <script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Listen for hash changes
		const handleHashChange = () => {
			const { hash } = process.browser;
			if (hash) {
				const id = hash.replace('#', '');
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}
		};

		window.addEventListener('hashchange', handleHashChange);
		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	});
</script> -->

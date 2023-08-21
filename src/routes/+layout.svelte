<script>
	import BackToTop from '$lib/components/BackToTop.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	import '../app.css';
</script>

<svelte:head
	><title>Jonathan Hang | Aspiring Software Developer</title>
	<meta
		name="description"
		content="Jonathan Hang, Software Developer, Dev Website. Developer based in Texas. Open to opportunities."
	/>
</svelte:head>
<NavBar />
<slot />
<BackToTop />

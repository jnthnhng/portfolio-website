<script>
	import BackToTop from '$lib/components/BackToTop.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	import '../app.css';
</script>

<svelte:head>
	<title>Jonathan Hang | Aspiring Software Developer</title>
</svelte:head>
<NavBar />
<slot />
<BackToTop />

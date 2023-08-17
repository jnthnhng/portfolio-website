<script>
	import BackToTop from '$lib/components/BackToTop.svelte';
	import FloatingHamburgerMenu from '$lib/components/FloatingHamburgerMenu.svelte';
	import NavBar from '$lib/components/NavBar.svelte';


	import '../app.css';
</script>


<!-- <NavBar /> -->
<FloatingHamburgerMenu />
<slot/>
<BackToTop />

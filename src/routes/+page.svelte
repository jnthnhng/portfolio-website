<script lang="en">
	import AboutSection from "$lib/sections/AboutSection.svelte";
	import ContactSection from "$lib/sections/ContactSection.svelte";
	import FloatingHamburgerMenu from "$lib/components/FloatingHamburgerMenu.svelte";
	import Projects from "$lib/sections/ProjectSection.svelte";
	import WelcomeSection from "$lib/sections/WelcomeSection.svelte";

	export const prerender = true;
</script>

<!-- <NavBar/> -->
<FloatingHamburgerMenu/>
<WelcomeSection/>
<!-- <slot/> -->
<AboutSection/>
<Projects/>
<!-- <Timeline/> -->
<ContactSection/>

<script>
	import AboutSection from '$lib/sections/AboutSection.svelte';
	import ContactSection from '$lib/sections/ContactSection.svelte';
	import Projects from '$lib/sections/ProjectSection.svelte';
	import WelcomeSection from '$lib/sections/HomeSection.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	// import HashChange from '$lib/components/HashChange.svelte';

	export const prerender = true;
</script>

<!-- <HashChange /> -->
<WelcomeSection />
<!-- <slot/> -->
<AboutSection />
<Projects />
<!-- <Timeline/> -->
<ContactSection />
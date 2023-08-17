<script>
	import upArrow from '$lib/assets/icons/chevron-up.png';
	import { afterUpdate, onMount } from 'svelte';

	let isButtonVisible = false;
	let isHomeSection = true;
    let hasScrolled = false;

	const backToTopButton = () => {
		if (!isHomeSection) {
			isHomeSection = !isHomeSection;
		} else {
			const homeElement = document.querySelector('#home');
			if (homeElement) {
				homeElement.scrollIntoView({ behavior: 'smooth' });
			} else {
                hasScrolled = false;
            }
		}
	};

	onMount(() => {
		document.addEventListener('scroll', handleScroll);
	});

	afterUpdate(() => {
		isButtonVisible = shouldShowButton();
	});

	function handleScroll() {
        if (!hasScrolled) {
            hasScrolled = true;
        }
		isButtonVisible = shouldShowButton();
	}

	function shouldShowButton() {
		return (window.scrollY > 100 || !isHomeSection) && hasScrolled;
	}
</script>

<div class="fixed bottom-4 right-4 z-50">
	{#if isButtonVisible}
		<button
			on:click={backToTopButton}
			id="menuButton"
			class="rounded border border-solid border-white bg-greenCream-resumeButtonBg p-2 text-white"
		>
			<!-- <i class="fa-solid fa-angle-up fa-beat" /> -->
			<img class="btn-square btn-xs" src={upArrow} sizes="10px" alt="up arrow" />
		</button>
	{/if}
</div>

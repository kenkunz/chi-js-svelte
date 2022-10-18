<script>
	import Slide1 from '$lib/slides/Slide1.svelte';
	import Slide2 from '$lib/slides/Slide2.svelte';
	import Slide3 from '$lib/slides/Slide3.svelte';
	import Slide4 from '$lib/slides/Slide4.svelte';
	import Slide5 from '$lib/slides/Slide5.svelte';
	import Slide6 from '$lib/slides/Slide6.svelte';
	import Slide7 from '$lib/slides/Slide7.svelte';
	import Slide8 from '$lib/slides/Slide8.svelte';
	import Slide9 from '$lib/slides/Slide9.svelte';
	import Slide10 from '$lib/slides/Slide10.svelte';
</script>

<main>
	<Slide1 />
	<Slide2 />
	<Slide3 />
	<Slide4 />
	<Slide5 />
	<Slide6 />
	<Slide7 />
	<Slide8 />
	<Slide9 />
	<Slide10 />
</main>

<style lang="postcss">
	main {
		display: grid;
		gap: 8px;
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		background-color: #cccccc;
		font-size: 2.5vw;
	}

	/* using :where for zero-specificity defaults */
	:where(main) :global :where(.slide) {
		scroll-snap-align: start;
		height: 100vh;
		padding: 1rem;
		display: grid;
		justify-items: center;
		align-items: start;
		background-color: white;
		background-size: cover;
		background-repeat: no-repeat;

		& ul,
		& div {
			min-width: 50%;
		}

		& h1,
		& h2,
		& h3,
		& h4,
		& h5,
		& h6 {
			margin-block: 1rem;
		}
	}
</style>

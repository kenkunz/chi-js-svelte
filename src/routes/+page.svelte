<script>
	import Slide1 from '$lib/slides/Slide1.svelte';
	import Slide2 from '$lib/slides/Slide2.svelte';
	import Slide3 from '$lib/slides/Slide3.svelte';
</script>

<main>
	<Slide1 />
	<Slide2 />
	<Slide3 />
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

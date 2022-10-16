<script>
	import Slide1 from '$lib/slides/Slide1.svelte';
</script>

<main>
	<Slide1 />

	<section class="slide">
		<h1>Slide 2 Title</h1>
		<div>Some slide content.</div>
	</section>
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
		grid-template-rows: auto 1fr;
		justify-items: center;
		align-items: start;
		background-color: white;
		background-size: cover;

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

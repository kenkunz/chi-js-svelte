<script>
	import { draw } from 'svelte/transition';
	import { onMount } from 'svelte';
	import background from '$lib/assets/chicago-1.jpg';

	let showSvg = false;
	let duration = 2500;

	onMount(() => {
		const timer = setInterval(() => (showSvg = !showSvg), duration * 2);
		return () => clearInterval(timer);
	});
</script>

<section class="slide" id="slide-1" style:background-image="url({background})">
	<h1>Chicago JavaScript Meetup</h1>
	<h2>Svelte & SvelteKit 101</h2>

	<svg viewBox="0 0 103 124">
		{#if showSvg}
			<path
				transition:draw={{ duration }}
				d="M45.41,108.86A21.81,21.81,0,0,1,22,100.18,20.2,20.2,0,0,1,18.53,84.9a19,19,0,0,1,.65-2.57l.52-1.58,1.41,1a35.32,35.32,0,0,0,10.75,5.37l1,.31-.1,1a6.2,6.2,0,0,0,1.11,4.08A6.57,6.57,0,0,0,41,95.19a6,6,0,0,0,1.68-.74L70.11,76.94a5.76,5.76,0,0,0,2.59-3.83,6.09,6.09,0,0,0-1-4.6,6.58,6.58,0,0,0-7.06-2.62,6.21,6.21,0,0,0-1.69.74L52.43,73.31a19.88,19.88,0,0,1-5.58,2.45,21.82,21.82,0,0,1-23.43-8.68A20.2,20.2,0,0,1,20,51.8a19,19,0,0,1,8.56-12.7L56,21.59a19.88,19.88,0,0,1,5.58-2.45A21.81,21.81,0,0,1,85,27.82,20.2,20.2,0,0,1,88.47,43.1a19,19,0,0,1-.65,2.57l-.52,1.58-1.41-1a35.32,35.32,0,0,0-10.75-5.37l-1-.31.1-1a6.2,6.2,0,0,0-1.11-4.08,6.57,6.57,0,0,0-7.06-2.62,6,6,0,0,0-1.68.74L36.89,51.06a5.71,5.71,0,0,0-2.58,3.83,6,6,0,0,0,1,4.6,6.58,6.58,0,0,0,7.06,2.62,6.21,6.21,0,0,0,1.69-.74l10.48-6.68a19.88,19.88,0,0,1,5.58-2.45,21.82,21.82,0,0,1,23.43,8.68A20.2,20.2,0,0,1,87,76.2a19,19,0,0,1-8.56,12.7L51,106.41a19.88,19.88,0,0,1-5.58,2.45"
			/>
		{/if}
	</svg>

	<h3>October 18, 2022</h3>
</section>

<style>
	section {
		color: white;
		padding: 2rem;
	}

	h1 {
		font-size: 5rem;
		font-weight: 100;
		letter-spacing: 0.05em;
	}

	h2 {
		font-weight: 500;
	}

	svg {
		justify-self: center;
		height: 100%;
		stroke: rgb(255, 62, 0);
		stroke-width: 1.5;
		fill: none;
	}
</style>

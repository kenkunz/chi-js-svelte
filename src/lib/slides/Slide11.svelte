<script>
	import summitGroupPhoto from '$lib/assets/summit-group-photo.jpg';
	let cover = false;
</script>

<section
	class="slide"
	class:cover
	id="slide-11"
	style:background-image="url({summitGroupPhoto})"
	on:click={() => {
		cover = !cover;
	}}
	on:keydown={() => {}}
>
	<h1>Thank you!</h1>
	<h2>Questions?</h2>
</section>

<style>
	section {
		position: relative;
		background-size: contain;
		background-position: center;
		background-color: #222;
		color: rgba(255, 255, 255, 0.8);
		text-transform: uppercase;
		font-weight: 400;
		letter-spacing: 0.1em;
	}

	.cover {
		background-size: cover;
	}

	h1,
	h2 {
		position: absolute;
		left: 0;
		right: 0;
		text-align: center;
		font-size: 7vh;
		line-height: 3em;
	}

	h2 {
		bottom: 0;
	}
</style>

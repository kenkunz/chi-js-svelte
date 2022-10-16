<main>
	<section>
		<h1>Slide 1 Title</h1>
		<ul>
			<li>Slide bullet 1</li>
			<li>Slide bullet 2</li>
		</ul>
	</section>

	<section>
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

	section {
		scroll-snap-align: start;
		height: 100vh;
		padding: 1rem;
		display: grid;
		grid-template-rows: auto 1fr;
		justify-items: center;
		align-items: start;
		background-color: white;

		& ul,
		& div {
			min-width: 50%;
		}
	}
</style>

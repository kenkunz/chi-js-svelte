<section class="slide" id="slide-7">
	<h1>
		<span class="svelte">Svelte</span>
		<span>≈</span>
		<span class="react">React</span>
	</h1>

	<ul>
		<li>Declarative / Reactive</li>
		<li>Component-Based</li>
		<li>HTML-like template syntax</li>
		<li>TypeScript support</li>
		<li>Vanilla-ish JavaScript</li>
	</ul>
</section>

<style lang="postcss">
	section {
		padding: 2em;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		align-items: center;
		background: radial-gradient(circle at top right, rgb(230, 233, 236), rgb(244, 245, 247));
	}

	h1 {
		display: grid;
		text-align: center;
		font-size: 6vw;
		color: #999;
	}

	.svelte {
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #444;
	}

	.react {
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-weight: 700;
		letter-spacing: 0.01em;
		color: #06c5f9;
	}

	ul {
		display: grid;
		gap: 1em;
	}
</style>

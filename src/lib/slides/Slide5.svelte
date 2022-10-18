<section class="slide" id="slide-5">
	<heading>
		<h1>Svelte</h1>
		<h2>cred</h2>
	</heading>

	<ul>
		<li>
			<a href="https://2021.stateofjs.com/en-US/libraries/front-end-frameworks"
				>State of JS Survey</a
			>
		</li>
		<li>
			<a
				href="https://survey.stackoverflow.co/2022/#most-loved-dreaded-and-wanted-webframe-love-dread"
				>Stack Overflow Survey</a
			>
		</li>
		<li><a href="https://npmtrends.com/svelte">NPM Download Trends</a></li>
		<li><a href="https://svelte.dev/">Who's using Svelte?</a></li>
		<li><a href="https://youtu.be/kMlkCYL9qo0">Svelte Origins (documentary)</a></li>
		<li><a href="https://youtu.be/A8jkJTWacow?t=29647">SvelteKit RC</a></li>
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

	heading {
		text-align: center;
	}

	h1 {
		font-size: 6vw;
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #444;
	}

	h2 {
		font-size: 6vw;
		font-weight: 500;
		letter-spacing: 0.05em;
		color: rgb(255, 62, 0);
	}

	ul {
		display: grid;
		gap: 1em;
	}

	a {
		color: inherit;

		&:not(:hover) {
			text-decoration: none;
		}
	}
</style>

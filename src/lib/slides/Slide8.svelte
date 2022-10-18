<section class="slide" id="slide-8">
	<ul>
		<li>
			<a href="https://svelte.dev/blog/virtual-dom-is-pure-overhead">No virtual DOM!</a>
		</li>
		<li>
			It’s <strike>compiled</strike>
			<a
				href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started#how_does_svelte_work"
				>a compiler</a
			>
		</li>
		<li>
			<a
				href="https://krausest.github.io/js-framework-benchmark/2022/table_chrome_106.0.5249.61.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL3JlYWN0Iiwia2V5ZWQvcmVhY3QtaG9va3MiLCJrZXllZC9zdmVsdGUiXSwiYmVuY2htYXJrcyI6WyIwMV9ydW4xayIsIjAyX3JlcGxhY2UxayIsIjAzX3VwZGF0ZTEwdGgxa194MTYiLCIwNF9zZWxlY3QxayIsIjA1X3N3YXAxayIsIjA2X3JlbW92ZS1vbmUtMWsiLCIwN19jcmVhdGUxMGsiLCIwOF9jcmVhdGUxay1hZnRlcjFrX3gyIiwiMDlfY2xlYXIxa194OCIsIjIxX3JlYWR5LW1lbW9yeSIsIjIyX3J1bi1tZW1vcnkiLCIyM191cGRhdGU1LW1lbW9yeSIsIjI1X3J1bi1jbGVhci1tZW1vcnkiLCIyNl9ydW4tMTBrLW1lbW9yeSIsIjMxX3N0YXJ0dXAtY2kiLCIzNF9zdGFydHVwLXRvdGFsYnl0ZXMiXSwiZGlzcGxheU1vZGUiOjEsImNhdGVnb3JpZXMiOlsxLDIsMyw0XX0="
				>Performance</a
			>
		</li>
		<li>
			<a href="https://svelte.dev/blog/write-less-code">Write</a>
			(& <a href="https://svelte.dev/blog/frameworks-without-the-framework">ship</a>)
			<a href="https://svelte.dev/blog/write-less-code">less code</a>
		</li>
		<li>
			<a href="https://www.swyx.io/svelte-why#batteries-included">Batteries included</a>
		</li>
	</ul>

	<h1>
		<span class="svelte">Svelte</span>
		<span>≠</span>
		<span class="react">React</span>
	</h1>
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
		color: #bf4040;
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

	a {
		color: inherit;

		&:not(:hover) {
			text-decoration: none;
		}
	}
</style>

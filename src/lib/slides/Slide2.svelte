<script>
	import profilePic from '$lib/assets/ken-1.jpg';
	import zenthropicLogo from '$lib/assets/zenthropic-logo.svg';
	import tradingStrategyLogo from '$lib/assets/trading-strategy-logo.svg';
</script>

<section class="slide" id="slide-2">
	<div class="photo" style:background-image="url({profilePic})">
		<h1>Ken Kunz</h1>
	</div>
	<div class="info">
		<div class="zenthropic">
			<img src={zenthropicLogo} alt="zenthropic logo" />
			<div class="sfh">
				<span class="code-1">&lt;software</span>
				<span class="code-2">for</span><span class="code-3">=</span><span class="code-4"
					>"humans"</span
				><span class="code-1">&gt;</span>
			</div>
		</div>
		<img src={tradingStrategyLogo} alt="Trading Strategy logo" />
	</div>
</section>

<style lang="postcss">
	section {
		padding: 0;
		grid-template-columns: 1fr 1fr;
	}

	.photo {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;

		& h1 {
			color: #666d7b;
			font-size: 4vw;
			font-weight: 100;
			text-align: center;
		}
	}

	.info {
		height: 100%;
		display: grid;
		grid-template-rows: 1fr 1fr;
		place-items: center;

		& img {
			width: 25vw;
		}
	}

	.zenthropic {
		display: grid;
		gap: 0.25em;
		justify-items: center;
		font: 2vw 'Anonymous Pro', monospace;
	}

	.sfh {
		& .code-1 {
			color: #20817b;
		}
		& .code-2 {
			color: #f99e23;
		}
		& .code-3 {
			color: #c3c3c3;
		}
		& .code-4 {
			color: #3cbeb3;
			font-weight: bold;
		}
	}
</style>

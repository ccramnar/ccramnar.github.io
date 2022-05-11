<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Thanks for visiting!</p>
</footer>

<style>
	main {
		max-width: 1400px;
       	margin: 50px auto;
		   background-color: var(--background);
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

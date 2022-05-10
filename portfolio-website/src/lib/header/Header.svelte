<script>
	import logo from './github-logo.svg';
</script>

<header>
	<nav>
		<div class="nav-container">
			<a href="/" class="nav-logo" title="Back to Homepage">Home</a>
			<div class="nav-links">
				<a href="/about" class="link">About</a>
				<a href="/photography" class="link">Photography</a>
				<a href="/projects" class="link">Projects</a>
				<a href="/contact" class="link">Contact</a>
			</div>
			<div class="corner">
				<a href="https://github.com/ccramnar">
					<img src={logo} alt="Github" />
				</a>
			</div>
		</div>
	</nav>
</header>

<style>

	.corner {
		width: 2em;
		height: 2em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 1.5em;
		height: 1.5em;
		object-fit: contain;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>

<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Me" />
</svelte:head>

<div class="main_container">
	<section>
		<div class="inner-container">
		  <h2 class="about-title">I'm Cyanne Ramnarine🌸</h2>
		  <div class="about-subtitle">
			  <p>
				4A Computer Science Student at the University of Waterloo.
			  </p>
			  <p>
				Creating magic daily on the internet. You can send me
				 an email at <span class="info-text">ccramnar@uwaterloo.ca</span>
			  </p>
			  <p> My Hobbies include photography, video games, reading and meeting new people!</p>
		  </div>
		</div>
	  </section>
 </div>

<style>
	 .main_container {
       margin: 0 80px 0 65px;
   }
   .about-title {
       font-size: 4.2rem;
       font-weight: bold;
       margin-top: 11rem;
   }
   .about-subtitle {
       margin-top: -2rem;
   }
   .about-subtitle >p {
       width: 60%;
       font-weight: normal;
       font-size: 1rem;
       line-height: 2rem;
   }
   .info-text {
       font-style: italic;
       font-weight: bold;
   }
</style>

<!-- src/routes/projects.svelte -->
<svelte:head>
   <title>Projects</title>
</svelte:head>

<script>
   import githubRepos from './data/repos.json';
</script>

<div class="container">
   <h1>My Repos</h1>
   <div class="githubRepos">
       {#each githubRepos as repos}
       <div class="repos">
           <h2>{repos.name.substring(0, 20)}</h2>
           <p>{repos.description.substring(0, 80)}</p>
           <p class="readmore">
            <a style=" color: rgb(10, 10, 139);" href={`/projects/${repos.id}`}>
              Read More
            </a>
          </p>
       </div>
       {/each}
   </div>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 50px auto;
    }
    .githubRepos {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    .repos {
        border: 1px solid #ddd;
        padding: 10px;
        box-shadow: 0 0 10px #eee;
    }
    h2 {
        margin: 0;
    }
    .readmore {
        color: rgb(10, 10, 139);
        text-align: right;
        margin: 20px 0 0 0;
    }
    .readmore:hover {
        color: green;
    }
</style>
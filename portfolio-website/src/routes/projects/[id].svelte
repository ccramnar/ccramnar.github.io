<script context="module">
    import repos from '../data/repos.json';
    export const load = async ({ params }) => {
        const id = params.id; 
        const post = repos[id];
        return {
            props: {
                post,
            }
        }
    }
</script>

<script>
// @ts-nocheck

    export let post;
</script>

<div class="container">
    <h1>{post.name}</h1>
    <h3>Technologies Used: {post.technology}</h3>
    <p>{post.fullDescription}</p>
</div>

<style>
    .container {
        max-width: 900px;
        margin: 50px auto;
    }
</style>
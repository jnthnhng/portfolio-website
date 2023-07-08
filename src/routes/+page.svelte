<script>
	/** @type {import('./$types').PageData}*/
	export let data
</script>

<!-- <h1>Recent Projects by Me</h1> -->
<!-- <div>{@html data.props.projects}</div> -->
<!-- <div>{@html data.projects.name}</div> -->
<pre>{JSON.stringify(data.props, null, 2)}</pre>
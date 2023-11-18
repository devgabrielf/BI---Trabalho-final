<script lang="ts">
	import jsIcon from "$assets/js.svg";
</script>

<svelte:head>
	<title>powerbi.js</title>
	<link rel="icon" type="image/svg" href={jsIcon} />
</svelte:head>

<div class="h-full min-h-[600px]">
	<iframe
		title="Trabalho final de BI"
		width="100%"
		height="100%"
		src="https://app.powerbi.com/reportEmbed?reportId=e810e772-9bc4-4831-acfd-89288f5e5fd3&autoAuth=true&ctid=14cbd5a7-ec94-46ba-b314-cc0fc972a161"
		frameborder="0"
		allowfullscreen
	/>
</div>

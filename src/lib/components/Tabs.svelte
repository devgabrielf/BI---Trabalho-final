<script>
	import { pages } from "$utils/pages";

	import { Tab } from "$components";
</script>

<div class="flex w-screen overflow-x-auto bg-zinc-900 md:w-[calc(100vw-250px)]">
	{#each pages as page (page.route)}
		<Tab {page} />
	{/each}
</div>

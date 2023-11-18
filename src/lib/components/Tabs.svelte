<script>
	import { pages } from "$utils/pages";

	import { Tab } from "$components";
</script>

<div
	class="fixed left-0 min-h-[40px] right-0 top-[50px] flex w-screen overflow-x-auto bg-zinc-900 md:relative md:left-[unset] md:right-[unset] md:top-[unset] md:w-[calc(100vw-250px)]"
>
	{#each pages as page (page.route)}
		<Tab {page} />
	{/each}
</div>
<div class="h-[40px] md:hidden" />

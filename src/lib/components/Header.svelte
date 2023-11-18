<script lang="ts">
	const items = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];
</script>

<header
	class="fixed left-0 right-0 top-0 flex h-[50px] items-center border-b border-zinc-800 bg-zinc-900 md:h-[30px]"
>
	{#each items as item}
		<button class="hidden px-2 py-[3px] text-sm hover:bg-zinc-800/50 lg:block">{item}</button>
	{/each}
	<span class="absolute left-[calc(50%-80px)] flex w-[160px] justify-center">
		Business Intelligence
	</span>
</header>
<div class="h-[50px] md:h-[30px]" />

<script lang="ts">
	import type { PageType } from "$utils/pages";

	export let page: PageType;
	export let textClass: string | undefined = undefined;
</script>

<div class="flex items-center gap-2">
	<img src={page.icon} alt="" class="h-[18px] w-[18px]" />
	<span class={textClass || ""}>
		{page.label}
	</span>
</div>

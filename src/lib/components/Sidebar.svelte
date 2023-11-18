<script lang="ts">
	import codeIcon from "$assets/code.svg";
	import configIcon from "$assets/config.svg";
	import filesIcon from "$assets/files.svg";
	import githubIcon from "$assets/github.svg";
	import mailIcon from "$assets/mail.svg";
	import userIcon from "$assets/user.svg";
	import { cn } from "$utils/css";

	const mainItems = [filesIcon, githubIcon, codeIcon, mailIcon];
	const secondaryItems = [userIcon, configIcon];
</script>

<aside class="hidden h-full min-h-[calc(100vh-60px)] min-w-[50px] flex-col items-center md:flex">
	{#each mainItems as item, index}
		<button
			class={cn("p-[12px] hover:bg-zinc-900/25", {
				"border-l-2 border-l-amber-600 pl-[10px]": index === 0,
			})}
		>
			<img src={item} alt="" class="h-[26px] w-[26px]" />
		</button>
	{/each}
	<div class="flex-1" />
	{#each secondaryItems as item}
		<button class="p-[12px] hover:bg-zinc-900/25">
			<img src={item} alt="" class="h-[26px] w-[26px]" />
		</button>
	{/each}
</aside>

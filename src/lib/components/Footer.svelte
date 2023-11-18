<script lang="ts">
	import branchIcon from "$assets/branch.svg";
	import notificationIcon from "$assets/notification.svg";
	import problemIcon from "$assets/problem.svg";
	import warningIcon from "$assets/warning.svg";
</script>

<footer
	class="fixed bottom-0 left-0 right-0 flex h-[30px] items-center gap-2 border-t border-zinc-800 bg-zinc-900 px-2 text-[13px]"
>
	<button class="flex h-[29px] items-center gap-1 px-1 text-zinc-50 hover:bg-zinc-700/50">
		<img src={branchIcon} alt="" class="h-[12px] w-[12px]" />
		<span>main</span>
	</button>
	<button class="flex h-[29px] items-center gap-1 text-zinc-50 hover:bg-zinc-700/50">
		<div class="flex items-center gap-1 px-1">
			<img src={problemIcon} alt="" class="h-[12px] w-[12px]" />
			<span>0</span>
		</div>
		<div class="flex items-center gap-1 px-1">
			<img src={warningIcon} alt="" class="h-[12px] w-[12px]" />
			<span>0</span>
		</div>
	</button>
	<div class="flex-1" />
	<button class="flex h-[29px] items-center px-1 text-zinc-50 hover:bg-zinc-700/50">
		<img src={notificationIcon} alt="" class="h-[14px] w-[14px]" />
	</button>
</footer>
<div class="h-[30px]" />

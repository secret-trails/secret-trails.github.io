<script setup>

</script>

<template>
	<div class="layout">
		<main>
			<slot/>
		</main>
		<!--		<Footer/>-->
	</div>
</template>

<style scoped lang="scss">
.layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

main {
	flex: 1;
}
</style>
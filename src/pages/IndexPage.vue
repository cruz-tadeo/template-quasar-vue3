<script setup lang="ts">
import { useGetUsers } from 'src/composables/useUsers';
import { onMounted } from 'vue';

const { fetchUser, user } = useGetUsers();

onMounted(async () => {
	await fetchUser(2);
});
</script>

<template>
	<q-page>
		<h2>
			Hola {{ user.email }}
		</h2>
	</q-page>
</template>

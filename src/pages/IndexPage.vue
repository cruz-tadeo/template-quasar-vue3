<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const page = ref();

const descargarHTML = async () => {
	// const contenidoHTML = document.documentElement.outerHTML; // Obtiene el contenido HTML completo
	// const blob = new Blob([contenidoHTML], { type: 'text/html' }); // Crea un objeto Blob con el contenido HTML
	// const url = URL.createObjectURL(blob); // Crea una URL para el objeto Blob

	// // Crea un enlace de descarga
	// const link = document.createElement('a');

	// link.href = url;

	// link.download = 'vista.html'; // Nombre del archivo de descarga

	// // // Dispara el evento de clic en el enlace para iniciar la descarga
	// link.click();

	// // // Libera la URL del objeto Blob
	// URL.revokeObjectURL(url);

	const response = await fetch(
		'http://storage.googleapis.com/lomas-storage/test.html',
		{
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);

	page.value = response.text();

	console.log('descargado');
};

onMounted(async () => {
	descargarHTML();
});
</script>

<template>
	<q-page>
		<h2>HGika</h2>
		<!-- <div>
			<q-btn label="DEscargar html" @click="descargarHTML"></q-btn>
		</div> -->
	</q-page>
</template>

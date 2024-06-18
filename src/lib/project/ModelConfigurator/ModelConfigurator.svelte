<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let src = '';
	export let texture: string | undefined = undefined;

	let jsFiles = [
		'https://aframe.io/releases/1.3.0/aframe.min.js',
		'https://cdn.jsdelivr.net/gh/tizzle/aframe-orbit-controls-component@v0.1.14/dist/aframe-orbit-controls-component.min.js'
	];
	let scriptsLoaded = false;
	const dispatch = createEventDispatcher();

	const loadScripts = async (scripts: string[]) => {
		const loadedScripts = [];

		await Promise.all(
			scripts.map((script) => {
				return new Promise<void>((resolve, reject) => {
					const scriptElement = document.createElement('script');
					scriptElement.src = script;
					scriptElement.async = false;

					scriptElement.onload = () => {
						loadedScripts.push(script);
						resolve();
					};

					scriptElement.onerror = (error) => {
						reject(error);
					};

					document.head.appendChild(scriptElement);
				});
			})
		);
	};

	onMount(() => {
		loadScripts(jsFiles).then(() => {
			// All scripts have been loaded
			scriptsLoaded = true;
			dispatch('scriptsLoaded');
		});
	});

	onDestroy(() => {
		try {
			jsFiles.forEach((script) => {
				const existingScript = document?.querySelector(`script[src="${script}"]`);
				if (existingScript) {
					existingScript.remove();
				}
			});
		} catch (error) {
			console.error('Error removing script:', error);
		}
	});

	$: texture;
</script>

{#if scriptsLoaded}
	<a-scene
		vr-mode-ui="enabled: false"
		embedded
		loading-screen="dotsColor: #557ffe; backgroundColor: #212121"
	>
		<a-assets>
			<img
				id="sky"
				crossorigin="anonymous"
				src="https://raw.githubusercontent.com/CybTekk-LLP/stoneTekk-models/main/sky.png"
				alt=""
			/>
			{#if texture}
				<img id="modelTexture" crossorigin="anonymous" src={texture} alt="" />
			{/if}
		</a-assets>

		<a-entity
			id="camera"
			camera="fov: 80; zoom: 1;"
			position="0 2 5"
			orbit-controls="
			autoRotate: false;
			target: #target;
			enableDamping: true;
			dampingFactor: 0.125;
			rotateSpeed: 0.25;
			minDistance: 3;
			maxDistance: 100;
		  "
			mouse-cursor=""
		>
		</a-entity>

		<a-sky src="#sky"></a-sky>
		<a-entity position="0 0 0" id="target"></a-entity>

		<a-entity
			id="model"
			dynamic-model-loader
			{src}
			{texture}
			rotation="0 60 0"
			scale="1 1 1"
			position="0 0 0"
			geometry="primitive: box; width: 5; height: 0.4; depth: 5"
			material={`src: url(${texture || '#modelTexture'}); color: #fff; roughness: 1; metalness: 0`}
		></a-entity>
	</a-scene>
{/if}

<style lang="scss">
	a-scene {
		inline-size: 100%;
		block-size: 400px;
	}
	:global(.a-modal) {
		display: none;
	}
</style>

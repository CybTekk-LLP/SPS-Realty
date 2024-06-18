<script context="module" lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import ModelConfigurator from './ModelConfigurator.svelte';

	let src = '/models/model.gltf';
	let texture = '/models/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWN.webp';
	export const meta = {
		title: 'ModelConfigurator',
		component: ModelConfigurator
	};
</script>

<Template let:args>
	<ModelConfigurator {...args} bind:texture></ModelConfigurator>
</Template>

<Story name="Model" args={{}} />

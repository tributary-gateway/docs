// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://tributary-gateway.github.io',
	base: '/docs',
	integrations: [
		mermaid(),
		starlight({
			title: 'Tributary',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tributary-gateway/tributary' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Quick Start', slug: 'getting-started' },
					],
				},
				{
					label: 'Core',
					items: [
						{ label: 'Configuration', slug: 'configuration' },
						{ label: 'API Reference', slug: 'api-reference' },
						{ label: 'Architecture', slug: 'architecture' },
					],
				},
				{
					label: 'Operations',
					items: [
						{ label: 'Benchmarks', slug: 'benchmarks' },
						{ label: 'Deployment', slug: 'deployment' },
					],
				},
			],
		}),
	],
});

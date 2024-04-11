import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/assets/common/sass/dashboard.scss',
                'resources/assets/common/sass/edit.scss',
                'resources/assets/core/sass/app.scss',
                'resources/assets/core/js/app.js',
            ],
            refresh: true,
        }),
    ],
});

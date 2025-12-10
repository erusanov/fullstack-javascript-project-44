import globals from 'globals';
import {defineConfig} from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import js from '@eslint/js';

export default defineConfig([
    {
        files: [
            '**/*.{js,mjs,cjs}'
        ],
        plugins: {
            js
        },
        extends: [
            'js/recommended'
        ]
    },
    {
        files: [
            '**/*.{js,mjs,cjs}'
        ],
        languageOptions: {
            globals: globals.node
        }
    },
    stylistic.configs.recommended,
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/object-curly-spacing': ['error', 'never'],
            'no-unused-vars': 'error'
        }
    }
]);

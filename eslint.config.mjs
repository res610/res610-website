import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
    {
        ignores: ['node_modules/**', '.next/**', 'out/**', 'next-env.d.ts'],
    },
    ...nextCoreWebVitals,
    ...nextTypescript,
    {
        // next.config.js などの CommonJS ファイルでは require() を許可
        files: ['**/*.js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
];

export default eslintConfig;

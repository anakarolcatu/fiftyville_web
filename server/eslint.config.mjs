import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config( 
    {
        files: ['src/**/*.ts'],
        extends: [
            ...tseslint.configs.recommended,
        ],
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_'}],
            '@typescript-eslint/explicit-function-return-type': 'warn',
            'no-console': ['warn', { 'allow': ['warn', 'error'] }],
        },
    },
    prettier,
);
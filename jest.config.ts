module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testMatch: ['**/?(*.)+(test).ts?(x)'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};

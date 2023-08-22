module.exports = {
    roots: ['./client/src'],
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    'testEnvironment': 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
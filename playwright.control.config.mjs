import { defineConfig } from '@playwright/test';
export default defineConfig({ testDir: '.', testMatch: /tests\/vm6-suite-loss\.spec\.js$/, reporter: [['line']] });

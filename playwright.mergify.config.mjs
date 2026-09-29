import { defineConfig } from '@playwright/test';
import { withMergify } from '@mergifyio/playwright';
export default withMergify(defineConfig({ testDir: '.', testMatch: /tests\/vm6-suite-loss\.spec\.js$/, reporter: [['line']] }));

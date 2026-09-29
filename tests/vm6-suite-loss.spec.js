const { test, expect } = require('@mergifyio/playwright');

test('same', async () => {
  expect(1).toBe(1);
});

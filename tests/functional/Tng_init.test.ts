

import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://review-create-doc-pn8ux3.kube.devtng.com/
  await page.goto('https://review-create-doc-pn8ux3.kube.devtng.com/');
  // Go to https://keycloak.review-create-doc-pn8ux3.kube.devtng.com/realms/tng/protocol/openid-connect/auth?approval_prompt=force&client_id=oauth2-proxy&redirect_uri=https%3A%2F%2Fauth.review-create-doc-pn8ux3.kube.devtng.com%2Foauth2%2Fcallback&response_type=code&scope=openid+profile+email&state=PaxNOjHnxhb3eA5FNqXA4WcLN53zEmR3DqOIvafhkKg%3Ahttps%3A%2F%2Freview-create-doc-pn8ux3.kube.devtng.com%2F
  await page.goto('https://keycloak.review-create-doc-pn8ux3.kube.devtng.com/realms/tng/protocol/openid-connect/auth?approval_prompt=force&client_id=oauth2-proxy&redirect_uri=https%3A%2F%2Fauth.review-create-doc-pn8ux3.kube.devtng.com%2Foauth2%2Fcallback&response_type=code&scope=openid+profile+email&state=PaxNOjHnxhb3eA5FNqXA4WcLN53zEmR3DqOIvafhkKg%3Ahttps%3A%2F%2Freview-create-doc-pn8ux3.kube.devtng.com%2F');
  // Click input[name="username"]
  await page.locator('input[name="username"]').click();
  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('test1');
  // Click input[name="password"]
  await page.locator('input[name="password"]').click();
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('test');
  // Click input:has-text("Sign In")
  await page.locator('input:has-text("Sign In")').click();
  await expect(page).toHaveURL('https://review-create-doc-pn8ux3.kube.devtng.com/');
  // Click input >> nth=1
  await page.locator('input').nth(1).click();
});
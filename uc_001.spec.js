import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://learn.lab.cce.af.mil/moodle/login/index.php?loginredirect=1');
  await page.waitForTimeout(500); // wait for 1/2 second
  await page.getByPlaceholder('Username').click();
  await page.waitForTimeout(500); // wait for 1/2 second
  await page.getByPlaceholder('Username').fill('admin');
  await page.waitForTimeout(500); // wait for 1/2 second
  await page.getByPlaceholder('Password').click();
  await page.waitForTimeout(500); // wait for 1/2 second
  await page.getByPlaceholder('Password').fill('12345passwordProd@newvpc');
  await page.waitForTimeout(500); // wait for 1/2 second
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(500); // wait for 1/2 second
  await page.getByLabel('User menu', { exact: true }).click();
  await page.waitForTimeout(500); // wait for 1/2 second
  await page.getByRole('menuitem', { name: 'Log out' }).click();
  });
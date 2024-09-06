import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('https://learn.lab.cce.af.mil/moodle/login/index.php');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345passwordProd@newvpc');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('menuitem', { name: 'Site administration' }).click();
  await page.getByRole('tab', { name: 'Learning Learning" / "' }).click();
  await page.getByRole('link', { name: 'Add a new course' }).click();
  await page.getByLabel('Course full name', { exact: true }).click();
  await page.getByLabel('Course full name', { exact: true }).fill('Major League Baseball');
  await page.getByLabel('Course short name', { exact: true }).click();
  await page.getByLabel('Course short name', { exact: true }).fill('MaLB');
  await page.getByLabel('Enable', { exact: true }).uncheck();
  await page.frameLocator('iframe[title="Rich text area"]').getByText('Baltimore Orioles WS Champs');
  await page.getByRole('button', { name: 'Save and display' }).click();
  await page.getByRole('button', { name: 'Proceed to course content' }).click();
});
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
    await page.getByRole('tab', { name: 'Users Users" / "' }).click();
    await page.getByRole('link', { name: 'Assign system roles' }).click();
    await page.getByRole('link', { name: 'Manager', exact: true }).click();
    await page.getByRole('button', { name: 'Dismiss this notification' }).click();
    await page.pause();
    await page.getByRole('cell', { name: 'Potential users   Search Clear' }).getByLabel('Search').click();
    await page.getByRole('cell', { name: 'Potential users   Search Clear' }).getByLabel('Search').fill('mike');
    await page.getByLabel('Potential users').selectOption('10010');
    await page.getByRole('button', { name: '◄ Add' }).click();
});
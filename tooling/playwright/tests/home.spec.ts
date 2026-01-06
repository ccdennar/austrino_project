import { test, expect } from '@playwright/test'

test('hero loads', async ({ page }) => {
  await page.goto('/en')
  await expect(page.locator('h1')).toContainText('Kubernetes Consulting')
})

test('locale switch', async ({ page }) => {
  await page.goto('/en')
  await page.selectOption('select', 'es')
  await expect(page).toHaveURL('/es')
})
import { test, expect } from '@playwright/test'

test('contact form renders', async ({ page }) => {
  await page.goto('/en#contact')
  await expect(page.locator('form')).toBeVisible()
})

test('form validation', async ({ page }) => {
  await page.goto('/en#contact')
  await page.click('button[type="submit"]')
  await expect(page.locator('text=Required')).toBeVisible()
})

test('successful submit (stub)', async ({ page }) => {
  await page.goto('/en#contact')
  await page.fill('input[name="name"]', 'E2E User')
  await page.fill('input[name="email"]', 'e2e@austro.dev')
  await page.fill('textarea[name="message"]', 'End-to-end test message')
  await page.click('button[type="submit"]')
  await expect(page.locator('text=Form submitted (demo)')).toBeVisible()
})
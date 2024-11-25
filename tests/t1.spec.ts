//1. The bot tries to click on the checkbox

import { test, expect } from "@playwright/test";

test("checkbox 1 is checked after interaction", async ({ page }) => {
  // Navigate to the URL
  await page.goto("https://the-internet.herokuapp.com/checkboxes");

  // Locate checkbox 1 and ensure it is interactable
  const checkbox1 = page
    .locator('form#checkboxes input[type="checkbox"]')
    .first();
  await checkbox1.waitFor({ state: "visible" });

  // Click checkbox 1 and ensure it's checked
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();

  // Reload the page
  await page.reload();

  // Verify the checkbox is unchecked after reload (default behavior)
  await expect(checkbox1).not.toBeChecked();
});

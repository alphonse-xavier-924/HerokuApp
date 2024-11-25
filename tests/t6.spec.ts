//6. The bot closes the modal window that is open

import { test, expect } from "@playwright/test";

test("close the modal window", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/entry_ad");

  // Wait for the modal to appear (it may take a moment after page load)
  await page.waitForSelector("#modal", { state: "visible" });

  // Click on the "Close" button in the modal footer
  const closeButton = page.locator("#modal .modal-footer p");
  await closeButton.click();

  // Wait for the modal to disappear
  await page.waitForSelector("#modal", { state: "hidden" });

  // Verify that the modal is closed by checking that it is no longer visible
  const modal = await page.locator("#modal");
  expect(await modal.isVisible()).toBe(false);
});

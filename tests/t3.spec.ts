//3. The bot closes the notification located within an iframe

import { test, expect } from "@playwright/test";

test("dismiss TinyMCE notification", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/iframe");

  // Switch to the iframe containing the TinyMCE editor
  const iframe = page.frameLocator("iframe#mce_0_ifr");

  // Locate the notification's "x" button and click it
  await page.locator(".tox-notification__dismiss").click();

  // Verify the notification is no longer visible
  const notification = page.locator(".tox-notification");
  await expect(notification).toBeHidden();
});

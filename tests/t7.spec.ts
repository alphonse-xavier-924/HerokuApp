//7. The bot right-clicks within the rectangle box

import { test, expect } from "@playwright/test";

test("right-click within the rectangle box and handle alert", async ({
  page,
}) => {
  // Go to the provided URL
  await page.goto("https://the-internet.herokuapp.com/context_menu");

  // Wait for the hot-spot div to be visible
  const hotspot = page.locator("#hot-spot");
  await expect(hotspot).toBeVisible();

  // Right-click on the hot-spot element
  await hotspot.click({ button: "right" }); // Right-click within the rectangle

  // Wait for the alert to appear after right-click
  page.once("dialog", async (dialog) => {
    // Verify the alert message
    expect(dialog.message()).toBe("You selected a context menu item");
    // Accept the alert
    await dialog.accept();
  });

  // You can also add a short wait to ensure the alert is processed before the test ends
  await page.waitForTimeout(1000);
});

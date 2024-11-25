//2. The bot drags the box A across bot B

import { test, expect } from "@playwright/test";

test("drag box A onto box B", async ({ page }) => {
  // Navigate to the URL
  await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

  // Locate the boxes
  const boxA = page.locator("#column-a");
  const boxB = page.locator("#column-b");

  // Perform drag-and-drop from Box A to Box B
  await boxA.dragTo(boxB);

  // Verify that the positions have swapped
  const boxAHeader = await boxA.locator("header").textContent();
  const boxBHeader = await boxB.locator("header").textContent();

  expect(boxAHeader).toBe("B");
  expect(boxBHeader).toBe("A");
});

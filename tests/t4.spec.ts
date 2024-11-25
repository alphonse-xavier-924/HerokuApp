//4. The bot sets the value of the horizontal slider to 4.5

import { test, expect } from "@playwright/test";

test("set slider value to 4.5", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/horizontal_slider");

  // Select the slider and set its value to 4.5
  const slider = page.locator('input[type="range"]');
  await slider.evaluate((el, value) => {
    el.value = value;
    el.dispatchEvent(new Event("change")); // trigger the change event
  }, "4.5");

  // Verify the slider value is set to 4.5
  const rangeValue = await page.locator("#range").innerText();
  expect(rangeValue).toBe("4.5");
});

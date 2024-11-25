//5. The bot sorts the table using the email as the filter

import { test, expect } from "@playwright/test";

test("sort table by email column", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/tables");

  // Click on the "Email" column header to sort the table in table1
  const emailHeader = page.locator('#table1 th:has-text("Email")');
  await emailHeader.click();

  // Wait for the table to be sorted (optional, based on your table's sorting behavior)
  await page.waitForTimeout(1000); // Wait for 1 second, adjust as necessary

  // Get the first row's email after sorting
  const firstRowEmail = await page
    .locator("#table1 tbody tr:first-child td:nth-child(3)")
    .innerText();

  // Verify that the first row's email is sorted correctly (example check for ascending order)
  expect(firstRowEmail).toBe("fbach@yahoo.com"); // Replace with expected email after sorting
});

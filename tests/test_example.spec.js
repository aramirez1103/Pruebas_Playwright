const { test, expect, request } = require("@playwright/test");

test.describe("Describe de ejemplo", () => {

    test("Test de ejemplo creado para tener una base", async({ page }) => {

        await page.goto('https://playwright.dev/');
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    })

})
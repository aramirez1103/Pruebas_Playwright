const { test, expect, request } = require("@playwright/test");

test("Tarea1: Busqueda en Google", async ({page})=> 
{
    await page.goto("https://www.google.com");
    const cajonDeBusqueda = page.locator(".gLFyf.gsfi");
    await cajonDeBusqueda.fill("¿Qué le dijo un fideo a otro?");
    await page.keyboard.press("Enter",{delay:500});
    //const primerResultado = page.locator("//div[@class='yuRUbf'] >> nth=0 >> a");  //xpath
    //await primerResultado.click();
    const primerResultado1 = page.locator(".yuRUbf").first(); 
    await primerResultado1.locator("a").click();

}
);
//nada
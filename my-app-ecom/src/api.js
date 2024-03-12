const apiUrl = new URL("https://v2.api.noroff.dev/online-shop");
const apiPath = apiUrl.toString();

export async function getProducts() {
    const response = await fetch(apiPath);
    const data = await response.json();
    return data;
}
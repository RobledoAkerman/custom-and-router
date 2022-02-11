export function initPageDatos(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <datos-page></datos-page>
    `;
  const button = div.querySelector(".next");

  button.addEventListener("click", () => {
    params.goTo("/bienvenida");
  });
  return div;
}

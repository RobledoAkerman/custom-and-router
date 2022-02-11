export function initPageBienvenida(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <bienvenida-page></bienvenida-page>
      `;
  const form = div.querySelector(".form");
  console.log(form);
  /*   form.addEventListener("submit", () => {
    params.goTo("/datos");
  }); */
  return div;
}

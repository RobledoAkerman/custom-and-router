export function initPageGracias(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <titulo-el label="Gracias"></titulo-el>
    <largetext-el
      class="large-text"
      label="Toda la información que nos brindaste es muy importante"
    ></largetext-el>
    <buttonsolid-el class="next" label="De nada"></buttonsolid-el>
    <br /><br /><br />
      `;
  const button = div.querySelector(".next");
  button.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}

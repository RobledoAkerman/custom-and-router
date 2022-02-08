export function initPageBienvenida(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <titulo-el label="Te damos la bienvenida a esta página"></titulo-el>
    <bodytext-el
      label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?"
    ></bodytext-el>
    <br />
    <br />
    <largetext-el
      class="large-text"
      label="Para continuar ingresá tu nombre"
    ></largetext-el>
    <br />
    <textfield-el class="textfield" label="Nombre"></textfield-el>
    <br />
    <buttonsolid-el class="next" label="Comenzar"></buttonsolid-el>
      `;
  const button = div.querySelector(".next");

  button.addEventListener("click", () => {
    params.goTo("/step-1");
  });
  return div;
}

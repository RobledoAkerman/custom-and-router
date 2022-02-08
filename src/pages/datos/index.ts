export function initPageDatos(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <titulo-el label="Necesitamos algunos datos más"></titulo-el>
    <br /><br />
    <textfield-el class="textfield" label="Email" type=""></textfield-el>
    <br /><br />
    <textfield-el class="textfield" label="Comida favorita"></textfield-el>
    <br /><br />
    <selectfield-el label="Alguna de estas tres opciones"></selectfield-el>
    <br /><br /><br />
    <buttonsolid-el class="next" label="Continuar"></buttonsolid-el>
    <br /><br /><br />
    <buttonoutlined-el class="back" label="Volver"></buttonoutlined-el>
      `;
  const buttonNext = div.querySelector(".next");
  const buttonBack = div.querySelector(".back")

  buttonNext.addEventListener("click", () => {
    params.goTo("/thankyou");
  });

  buttonBack.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  return div;
}

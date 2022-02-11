import { state } from "../../state";

class Bienvenida extends HTMLElement {
  shadow: ShadowRoot;
  nombre: string;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.nombre = state.getState().nombre;
    state.subscribe(() => {
      this.nombre = state.getState().nombre;
      this.render();
    });
    this.render();
  }
  render() {
    this.shadow.innerHTML = `
    <titulo-el label="Te damos la bienvenida a esta página"></titulo-el>
    <br />
    <br />
    <largetext-el
      class="large-text"
      label="Para continuar ingresá tu nombre"
    ></largetext-el>
    <br />
    <form class="form">
    <textfield-el class="textfield" label="Nombre" name="nombre"></textfield-el>
    <br />
    <buttonsolid-el type="submit" name="submit" class="next" label="Comenzar"></buttonsolid-el>
    </form>
    `;
    const form = this.shadow.querySelector(".form");
    console.log(form);
    
    form.addEventListener("submit", (e: any) => {
      e.preventDefault();
      state.setState({
        ...state.getState(),
        nombre: e.target.nombre.value,
      });
    });
  }
}
customElements.define("bienvenida-page", Bienvenida);

import { state } from "../../state";

class Datos extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  nombre: string = "";
  constructor() {
    super();
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }
  syncWithState() {
    const lastState = state.getState();
    this.nombre = lastState.nombre || "";
    this.render();
  }
  render() {
    this.shadow.innerHTML = `
    <titulo-el label="Hola ${this.nombre}"></titulo-el>
    <br /><br />
    <largetext-el
    class="large-text"
    label="Necesitamos algunos datos más"
    ></largetext-el>
    <textfield-el class="textfield" label="Email" type=""></textfield-el>
    <br /><br />
    <textfield-el class="textfield" label="Comida favorita"></textfield-el>
    <br /><br />
    <selectfield-el label="Alguna de estas tres opciones"></selectfield-el>
    <br /><br /><br />
    <buttonsolid-el class="next" label="Enviar"></buttonsolid-el>
    <br /><br /><br />    
    `;
  }
}
customElements.define("datos-page", Datos);

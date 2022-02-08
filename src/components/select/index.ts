export function init() {
  class SelectField extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var label = this.getAttribute("label")
      var div = document.createElement("div");
      var style = document.createElement("style");

      div.classList.add("root");
      div.textContent = label;

      style.textContent = `
  
            .root{
                display: flex;
                flex-direction: column;
                font-size: 18px;
                font-family: 'Roboto', sans-serif;
                margin: auto;
            }
            select{
                display: flex;
                min-width: 312px;
                max-width: 353px;
                height: 55px;
                font-size: 18px;
                font-family: 'Roboto', sans-serif;
                border-radius: 4px;
                background-color: #c3c3c3;
                border: none;
            }
            `;

      div.innerHTML = `
      <label>${label}</label>
      <select name="select-options" id="select-options">
        <option value="1">Piedra</option>
        <option value="2">Papel</option>
        <option value="3">Tijera</option>
      </select>
      `      

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("selectfield-el", SelectField);
}

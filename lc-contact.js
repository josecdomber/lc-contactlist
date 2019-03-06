import { LitElement, html} from 'lit-element';

export class LcContact extends LitElement {
    static get properties() {
        return {
            nombre: {
                type: String
            },
            email: {
                type: String
            },
            vermas: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.vermas = false;
    }

    render() {
        return html `
            <style>
            div {
              border: 1px solid #ddd;
              padding: 10px;
              border-radius: 5px;
              display: inline-block;
            }
            h1 {
              font-size: 1.2em;
              font-weight: normal;
            }
            </style>
            <div>
                <h1>${this.nombre}</h1>

                <p><a href="#" @click="${this.toggle}"> 
                
                    ${!this.vermas? html `Ver más`: html `Ver menos`}
                
                </a></p>
                
                ${this.vermas? 
                html `eMail: ${this.email}` : 
                ''
            }
            </div>
            `;
    }

    toggle(e) {
        e.preventDefault();
        this.vermas = !this.vermas;
    }
}

customElements.define('lc-contact', LcContact);
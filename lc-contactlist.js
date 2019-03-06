import {LitElement, html} from 'lit-element';
import './lc-contact';

export class LcContactList extends LitElement {

     /**
     * `lc-contactlist`
     * 
     * Show a list of contacts hardcoded previously for the user
     * 
     * ## Show a list of contacts
     *
     * The component is created with de library lit-element.
     *
     * Only is used Polymer to created de scafold-element and Polymer serve for de Demo in local.
     *
     * The component is created for download later fron npm.
     *
     * ```html
     * <lc-contactlist> </lc-contactlist>
     * ```
     *
     * ## Styling
     *
     * Custom property | Description | Default
     * ----------------|-------------|---------
     * --lc-contactlist | Mixin applied to entire element | {}
     *
     **/
    static get properties() {
        return {
            contactos: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.contactos = [
            {
             nombre: 'José Carlos Dominguez',
             email: 'josecdomber@gmail.com'
            },
            {
             nombre: 'Paloma Fernández',
             email: 'palomafdez.serrano@gmail.com'
            },
            {
             nombre: 'Marcos Domínguez',
             email: 'marcosdominguez.fdez@gmail.com'
            }
        ]
    }

    render() {
        return html `
        <style>
          :host {
             @apply --lc-contactlist;
          }
        </style>
            ${this.contactos.map(contacto => 
                html`<lc-contact nombre=${contacto.nombre} email=${contacto.email}></lc-contact>`)}
        `;
    }

}

customElements.define('lc-contactlist', LcContactList);

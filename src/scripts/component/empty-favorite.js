// class EmptyFavorite extends HTMLElement {
//     connectedCallback() {
//         this._render();
//     }

//     _render() {
//         this.innerHTML = `
//               <div class="empty-favorite-icon">
//                   <i class="far fa-folder-open"></i>
//               </div>
//               <div class="empty-favorite-resto">
//                   <p>Favorite restaurant still empty</p>
//               </div>
//           `;
//     }
// }

// customElements.define('empty-favorite', EmptyFavorite);

class EmptyFavorite extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="empty-favorite-icon">
          <i class="far fa-folder-open"></i>
      </div>
      <div class="empty-favorite-resto">
          <p>Favorite restaurant still empty</p>
      </div>
  `;
  }
}

customElements.define('empty-favorite', EmptyFavorite);

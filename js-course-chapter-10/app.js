class Product {
  //   title = "Default";
  //   imageUrl;
  //   description;
  //   price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
      <img src='${this.product.imageUrl}' alt='${this.product.title}' >
      <div class='product-item__content'>
        <h2>${this.product.title}</h2>
        <h3>$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
      </div>
      `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://media.restorationhardware.com/is/image/rhis/cat18990045-fw?wid=1000",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndzl3tXux_6fRF3It4T0IX510jveJpmBHHw&usqp=CAU",
      "A nice carpet",
      89.99
    ),
  ];
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();

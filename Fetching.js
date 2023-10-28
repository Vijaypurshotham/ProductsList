let  apiurl = 'https://fakestoreapi.com/products'

fetch(apiurl).then(response => response.json())
.then(data => {
    displayProducts(data);
}).catch(err => {
    console.log(err)
});

function displayProducts(products)
{
    let productContainer = document.getElementById('product');
    productContainer.innerHTML = '';

    products.forEach(product => {
        let productElement = document.createElement('div');
        productElement.className='product';
        productElement.innerHTML= 
        `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}">
        <p>Price: $${product.price}</p>
        `;

        productContainer.appendChild(productElement);
    })
}
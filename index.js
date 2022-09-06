const productsCart = [
    {
        name: "Uva Crimson",
        price: 44.99
    },
    {
        name: "Vinho Canção",
        price: 17.98
    },
    {
        name: "Água de coco",
        price: 8.99
    },
    {
        name: "Mamão",
        price: 9.98
    },
    {
        name: "Água Tônica",
        price: 17.98
    }
]



function soma () {
    //soma dos itens no carrinho
    let total = 0

    for (const i in productsCart) {
        total += productsCart[i].price
    }
    return total
}

console.log(soma())

function render () {
    //criando main
    const main = document.createElement('main')
    document.body.appendChild(main)
    //criando header
    const header = document.createElement('h2')
    header.innerText = "Virtual Market"
    main.appendChild(header)
    //criando lista
    const ProductList = document.createElement('ul')
    main.appendChild(ProductList)
    //nome do carrinho
    const titleCarrinho = document.createElement('li')
    titleCarrinho.innerHTML = `<span>Item</span><span>Valor</span>`
    titleCarrinho.classList.add("flex", "title")
    ProductList.appendChild(titleCarrinho)

    //colocando itens no carrinho
    for(const i in productsCart) {
        const ProductDetails = document.createElement('li')
        
        ProductDetails.innerHTML = `<span>${productsCart[i].name}</span><span>R$${productsCart[i].price}</span>`
        ProductDetails.classList.add("flex", "item")
        
        ProductList.appendChild(ProductDetails)
    }

    //Total do carrinho
    const valorCarrinho = document.createElement('li')
    valorCarrinho.innerHTML = `<span>Total</span><span>R$${soma()}</span>`
    valorCarrinho.classList.add("flex", "total")
    ProductList.appendChild(valorCarrinho)

    // botão finalizar
    const ButtonEnd = document.createElement('button')
    ButtonEnd.innerText = "Finalizar Compra"
    ProductList.appendChild(ButtonEnd)

    
}

render()
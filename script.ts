const productCards = document.querySelector(".productCards")
const invent = document.querySelector(".invent")
const moneyLimit = document.querySelector(".moneyLimit")
const weightLimit = document.querySelector(".weightLimit")
const modalBtn = document.querySelector(".modalButton")



interface myItems {
    name: string;
    photo: string;
    weight: number;
    price: number;
    category: string;
}

const products: myItems[] = [
    {
        name: "Milk",
        photo: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=960,872",
        weight: 0.7,
        price: 2,
        category: "food"
    },
    {
        name: "Bread",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",
        weight: 0.5,
        price: 3,
        category: "food"
    },
    {
        name: "Meat",
        photo: "https://media.wired.com/photos/5b493b6b0ea5ef37fa24f6f6/125:94/w_2393,h_1800,c_limit/meat-80049790.jpg",
        weight: 2.5,
        price: 4.50,
        category: "food"
    },
    {
        name: "Camera",
        photo: "http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c",
        weight: 5,
        price: 200,
        category: "electronics"
    },
    {
        name: "Screen",
        photo: "https://lh3.googleusercontent.com/proxy/wl4THlWX1WeI7MVeP2X0DKLUE7NZr6fdm4WQ32TDzYefkQ67htVue1e-F_RKzSA8oTLNNfsBqGnUSbfeBip4F09i-PnAIyxMCd-l-zgh9ZNxSqcF20aBf_0BbdQ",
        weight: 8,
        price: 150,
        category: "electronics"
    },
    {
        name: "Phone",
        photo: "https://i5.walmartimages.com/asr/10accd37-b241-4d55-b39d-2417f2f80f74.dd8421d47ac8c8517d0b81fe716760b2.jpeg",
        weight: 0.5,
        price: 400,
        category: "electronics"
    },
    {
        name: "Chair",
        photo: "https://www.ikea.com/kr/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s",
        weight: 4,
        price: 20,
        category: "furniture"
    },
    {
        name: "Sofa",
        photo: "https://cdn.shopify.com/s/files/1/0056/0912/8000/products/Sofa_lova_Svan_1800x1800.jpg?v=1583269013",
        weight: 60,
        price: 200,
        category: "furniture"
    },
    {
        name: "Lamp",
        photo: "https://greenice.com/57848/a.jpg",
        weight: 4,
        price: 80,
        category: "furniture"
    },
]

let moneyCounter = 200
let weightCounter = 50

function createItems () {
    productCards.innerHTML = ""
    for (const product of products) {
        const card = document.createElement("div")
        card.classList.add ("card")
        productCards.appendChild(card)
        const picture = document.createElement("img")
        picture.src = product.photo
        card.appendChild(picture)
        const name = document.createElement("h2")
        name.innerHTML = product.name
        card.appendChild(name)
        const cost = document.createElement ("p")
        cost.innerHTML = `${product.price}`
        card.appendChild(cost)
        const weight = document.createElement("p")
        weight.innerHTML = `${product.weight}`
        card.appendChild(weight)
        const category = document.createElement( "p")
        category.innerHTML = product.category
        card.appendChild(category)

        card.onclick =(e) =>{
            if(moneyCounter >= product.price && weightCounter >= product.weight){
                moneyCounter -= product.price
                weightCounter -= product.weight
                moneyLimit.innerHTML = `Money:${moneyCounter}`
                weightLimit.innerHTML= `Weight:${weightCounter}`
                const cln = card.cloneNode(true)
                invent.appendChild(cln)


            }

        }

    }
}
createItems()


const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modalBtn.onclick = () => {

    const inputs = document.querySelectorAll("input")

    const item = {
        name: inputs[1].value,
        photo: inputs[0].value,
        weight: inputs[3].value,
        price: inputs[2].value,
        category: inputs[4].value
    }
    products.push(item)
createItems()
    c

}





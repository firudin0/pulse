const product = document.getElementById("product");
const button = document.getElementById("btn");


async function get() {
    const res = await axios.get(
        `https://655c844f25b76d9884fd70a7.mockapi.io/products`
    );
    const data = res.data;
    db = data;
    db.map((item) => {
        const box = document.createElement("div");
        box.className = "boxs col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12";
        box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.name}</p>
        </div>
        <p>$ ${item.price}</p>
        <button onclick="removeCart(${item.id})">Remove</button>
        </div>
        `
        product.appendChild(box);
    });


}

get()

function removeCart(id) {
    axios.delete(`https://655c844f25b76d9884fd70a7.mockapi.io/products/${id}`)
  
}








//Form


const nameInp = document.getElementById('exampleInputName')
const surnameInp = document.getElementById('exampleInputSurname')
const form = document.getElementById('form')

function getdorm(e) {
    e.preventDefault()

    axios.post('https://655c844f25b76d9884fd70a7.mockapi.io/products', {
        name: nameInp.value,
        surname: surnameInp.value
    })
        .then(res => {
            console.log(res.data);
            form.reset();
        })
}

form.addEventListener('submit', getdorm)



const forme = document.getElementById("forme");
const inp = document.getElementById("inp");


function geta() {
    product.innerHTML = ''
    axios.get(
        `https://655c844f25b76d9884fd70a7.mockapi.io/products`
    )
    .then(res => {
        db = res.data
        const search = db.filter(item => item.title.toLowerCase().includes(inp.value.toLowerCase()))
        search.map(item => {
            console.log(item)
            const box = document.createElement('div')
            box.innerHTML = `
            <div class="divz col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
            <img src="${item.image}" alt="">
            <div class="divc">
                <p>${item.title}</p>
            </div>
            <p>$ ${item.price}</p>
    
        <button onclick="removeCart(${item.id})">Remove</button>
                </div>
            `
            product.appendChild(box)
        })
    })

  
}

forme.addEventListener('submit', (e) => {
    e.preventDefault()
    geta()
})
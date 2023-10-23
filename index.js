const tableData = document.getElementById("tableContent");
const btnAddProduct = document.getElementById("addProduct");
const modal = document.getElementById("modal");
const productName = document.getElementById("productName");
const productValue = document.getElementById("productValue");
const productQuantity = document.getElementById("productQuantity");
const btnSend = document.getElementById("send");
const btnCancel = document.getElementById("cancel");

const products = [
  {
    nome: "Smartphone Xiaomi REDMI Note 10 Pro",
    preco: 1969.9,
    quantidade: 3,
  },
  {
    nome: "Smartphone Xiaomi REDMI Note 12S",
    preco: 1329.9,
    quantidade: 5,
  },
];

function formatDataToString(value) {
  const valorFormatado = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valorFormatado;
}

function createTableBodyRow(nome, preco, quantidade, total) {
  const html = (tableData.innerHTML += `
        <tr class="even:bg-[#f2f2f2] odd:bg-white">
            <td class="p-3">${nome}</td>
            <td class="p-3">${preco}</td>
            <td class="p-3">${quantidade}</td>
            <td class="text-center p-3">${total}</td>
        </tr>
    `);

  return html;
}

function renderDataTable() {
  tableData.innerHTML = " ";
  products.map((product) => {
    const preco = formatDataToString(product.preco);
    const total = product.preco * product.quantidade;
    const totalFormatado = formatDataToString(total);
    const data = createTableBodyRow(
      product.nome,
      preco,
      product.quantidade,
      totalFormatado
    );

    return data;
  });
}

renderDataTable();

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}


function closeModal() {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}


btnAddProduct.addEventListener("click", openModal);
document.getElementById("cancel").addEventListener("click", closeModal);


function addProduct() {
  console.log(productName.value, productQuantity.value, productValue.value);
  const productNameValue = productName.value;
  const productQuantityValue = parseFloat(productQuantity.value);
  const productValueValue = parseFloat(productValue.value);

  const newProduct = {
    nome: productNameValue,
    preco: productValueValue,
    quantidade: productQuantityValue,
  };

  products.push(newProduct);

  renderDataTable();
  console.log(products);

  modal.classList.remove("flex");
  modal.classList.add("hidden");
};

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  addProduct();
});

btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal();
});
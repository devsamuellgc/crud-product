const tableData = document.getElementById("tableContent");

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
  
function renderDataTable() {
    products.map((product) => {
      const preco = formatDataToString(product.preco);
      const total = product.preco * product.quantidade;
      const totalFormatado = formatDataToString(total);
      const data = (tableData.innerHTML += `
          <tr class="even:bg-[#f2f2f2] odd:bg-white">
              <td class="p-3">${product.nome}</td>
              <td class="p-3">${preco}</td>
              <td class="p-3">${product.quantidade}</td>
              <td class="text-center p-3">${totalFormatado}</td>
          </tr>
      `);
  
      return data;
    });
  }
  
  renderDataTable();
  
// Dados dos produtos da lojinha
const produtos = [
  {
    id: 1,
    nome: "Necessaire Rosa",
    preco: 35.00,
    imagem: "assets/bolsinha.jpeg",
    categoria: "acessorios",
    descricao: "Necessaire linda e prática para organizar seus itens pessoais"
  },
  {
    id: 2,
    nome: "Estojo Autocuidado",
    preco: 28.00,
    imagem: "assets/estojo-autocuidado.jpeg",
    categoria: "acessorios",
    descricao: "Estojo especial para seus produtos de autocuidado"
  },
  {
    id: 3,
    nome: "Copo Personalizado",
    preco: 22.00,
    imagem: "assets/img-copo.jpeg",
    categoria: "casa",
    descricao: "Copo personalizado para chá de bebê e ocasiões especiais"
  },
  {
    id: 4,
    nome: "Kit Carrinhos",
    preco: 45.00,
    imagem: "assets/img-kit-carrinhos.jpg",
    categoria: "brinquedos",
    descricao: "Kit com carrinhos coloridos para diversão dos pequenos"
  },
  {
    id: 5,
    nome: "Body Personalizado",
    preco: 30.00,
    imagem: "assets/produto1.jpg",
    categoria: "roupas",
    descricao: "Body personalizado com estampas fofas para bebês"
  },
  {
    id: 6,
    nome: "Manta de Bebê",
    preco: 55.00,
    imagem: "assets/produto2.jpg",
    categoria: "roupas",
    descricao: "Manta macia e quentinha para o conforto do seu bebê"
  },
  {
    id: 7,
    nome: "Kit Babadores",
    preco: 40.00,
    imagem: "assets/produto3.jpg",
    categoria: "acessorios",
    descricao: "Kit com 3 babadores temáticos super fofinhos"
  },
  {
    id: 8,
    nome: "Sapatinho de Crochê",
    preco: 32.00,
    imagem: "assets/produto4.jpg",
    categoria: "roupas",
    descricao: "Sapatinho artesanal de crochê feito com muito amor"
  },
  {
    id: 9,
    nome: "Touca Decorada",
    preco: 25.00,
    imagem: "assets/produto5.jpg",
    categoria: "acessorios",
    descricao: "Touca linda com decoração especial para recém-nascidos"
  },
  {
    id: 10,
    nome: "Almofada Amamentação",
    preco: 65.00,
    imagem: "assets/produto6.jpg",
    categoria: "maternidade",
    descricao: "Almofada ergonômica para tornar a amamentação mais confortável"
  },
  {
    id: 11,
    nome: "Móbile Musical",
    preco: 85.00,
    imagem: "assets/produto7.jpg",
    categoria: "decoracao",
    descricao: "Móbile musical com melodias suaves para o berço do bebê"
  },
  {
    id: 12,
    nome: "Kit Higiene Decorado",
    preco: 75.00,
    imagem: "assets/produto8.jpg",
    categoria: "higiene",
    descricao: "Kit completo de higiene com potes decorados personalizados"
  },
  {
    id: 13,
    nome: "Organizador de Fraldas",
    preco: 42.00,
    imagem: "assets/produto9.jpg",
    categoria: "organizacao",
    descricao: "Organizador prático e bonito para manter as fraldas sempre em ordem"
  },
  {
    id: 14,
    nome: "Quadro Decorativo",
    preco: 38.00,
    imagem: "assets/produto10.jpg",
    categoria: "decoracao",
    descricao: "Quadro personalizado para decorar o quartinho do bebê"
  },
  {
    id: 15,
    nome: "Chupeta Personalizada",
    preco: 18.00,
    imagem: "assets/produto11.jpg",
    categoria: "acessorios",
    descricao: "Chupeta com nome personalizado e cores suaves"
  },
  {
    id: 16,
    nome: "Livro Sensorial",
    preco: 45.00,
    imagem: "assets/produto12.jpg",
    categoria: "brinquedos",
    descricao: "Livro de tecido com texturas para estimular os sentidos do bebê"
  },
  {
    id: 17,
    nome: "Naninha Personalizada",
    preco: 35.00,
    imagem: "assets/produto13.jpg",
    categoria: "brinquedos",
    descricao: "Naninha macia e personalizada para ser a companheira do bebê"
  },
  {
    id: 18,
    nome: "Kit Paninhos de Boca",
    preco: 28.00,
    imagem: "assets/produto14.jpg",
    categoria: "higiene",
    descricao: "Kit com 5 paninhos de boca super absorventes e decorados"
  },
  {
    id: 19,
    nome: "Porta Documentos",
    preco: 32.00,
    imagem: "assets/produto15.jpg",
    categoria: "organizacao",
    descricao: "Porta documentos temático para organizar papéis importantes do bebê"
  },
  {
    id: 20,
    nome: "Enfeite de Porta",
    preco: 48.00,
    imagem: "assets/produto16.jpg",
    categoria: "decoracao",
    descricao: "Enfeite personalizado para a porta da maternidade ou do quarto"
  },
  {
    id: 21,
    nome: "Lembrancinha Maternidade",
    preco: 15.00,
    imagem: "assets/produto17.jpg",
    categoria: "lembrancinhas",
    descricao: "Linda lembrancinha personalizada para distribuir na maternidade"
  },
  {
    id: 22,
    nome: "Convite Chá de Bebê",
    preco: 8.00,
    imagem: "assets/produto18.jpg",
    categoria: "papelaria",
    descricao: "Convite personalizado para seu chá de bebê (unidade)"
  },
  {
    id: 23,
    nome: "Caderno da Gestante",
    preco: 55.00,
    imagem: "assets/produto19.jpg",
    categoria: "papelaria",
    descricao: "Caderno especial para registrar todos os momentos da gestação"
  },
  {
    id: 24,
    nome: "Bolsa Maternidade",
    preco: 120.00,
    imagem: "assets/produto20.jpg",
    categoria: "acessorios",
    descricao: "Bolsa prática e estilosa com vários compartimentos para a mamãe"
  },
  {
    id: 25,
    nome: "Kit Primeiro Banho",
    preco: 68.00,
    imagem: "assets/produto21.jpg",
    categoria: "higiene",
    descricao: "Kit completo para o primeiro banho do bebê com produtos especiais"
  },
  {
    id: 26,
    nome: "Chaveiro Personalizado",
    preco: 12.00,
    imagem: "assets/produto22.jpg",
    categoria: "acessorios",
    descricao: "Chaveiro fofo personalizado com o nome do bebê"
  }
];

let produtosFiltrados = [...produtos];
let searchInput;
let searchIcon;

// Função para renderizar produtos
function renderizarProdutos(produtosParaRenderizar = produtosFiltrados) {
  const container = document.querySelector('.product-section');
  
  if (produtosParaRenderizar.length === 0) {
    container.innerHTML = `
      <div class="no-products">
        <p>Nenhum produto encontrado.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = produtosParaRenderizar.map(produto => `
    <div class="product-card" onclick="abrirDetalheProduto(${produto.id})">
      <div class="product-image-container">
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" loading="lazy">
        <div class="product-overlay">
          <button class="btn-view-product">
            <i class="material-icons">visibility</i>
            Ver Produto
          </button>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${produto.nome}</h3>
        <p class="product-description">${produto.descricao}</p>
        <div class="product-price-container">
          <span class="product-price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
        </div>
        <button class="btn-contact" onclick="entrarEmContato(${produto.id})">
          <i class="material-icons">message</i>
          Entrar em Contato
        </button>
      </div>
    </div>
  `).join('');
}

// Função para buscar produtos
function buscarProdutos(termo) {
  if (!termo.trim()) {
    produtosFiltrados = [...produtos];
  } else {
    produtosFiltrados = produtos.filter(produto => 
      produto.nome.toLowerCase().includes(termo.toLowerCase()) ||
      produto.categoria.toLowerCase().includes(termo.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(termo.toLowerCase())
    );
  }
  renderizarProdutos();
}

// Função para toggle da busca
function toggleBusca() {
  if (searchInput.style.display === 'none' || !searchInput.style.display) {
    searchInput.style.display = 'block';
    searchInput.style.width = '300px';
    searchInput.focus();
  } else {
    searchInput.style.display = 'none';
    searchInput.style.width = '0';
    searchInput.value = '';
    buscarProdutos('');
  }
}

// Função para abrir detalhes do produto
function abrirDetalheProduto(produtoId) {
  const produto = produtos.find(p => p.id === produtoId);
  if (!produto) return;

  // Criar modal de detalhes
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.innerHTML = `
    <div class="modal-overlay" onclick="fecharModal()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="fecharModal()">
          <i class="material-icons">close</i>
        </button>
        <div class="modal-body">
          <div class="modal-image">
            <img src="${produto.imagem}" alt="${produto.nome}">
          </div>
          <div class="modal-info">
            <h2>${produto.nome}</h2>
            <p class="modal-description">${produto.descricao}</p>
            <div class="modal-price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
            <div class="modal-actions">
              <button class="btn-contact-modal" onclick="entrarEmContato(${produto.id})">
                <i class="material-icons">message</i>
                Entrar em Contato
              </button>
              <button class="btn-whatsapp" onclick="entrarEmContatoWhatsApp(${produto.id})">
                <i class="material-icons">phone</i>
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('show'), 10);
}

// Função para fechar modal
function fecharModal() {
  const modal = document.querySelector('.product-modal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.remove(), 300);
  }
}

// Função para entrar em contato
function entrarEmContato(produtoId) {
  const produto = produtos.find(p => p.id === produtoId);
  if (!produto) return;
  
  window.open('https://www.instagram.com/lojinha.abraceumrn/', '_blank');
}

// Função para contato via WhatsApp
function entrarEmContatoWhatsApp(produtoId) {
  const produto = produtos.find(p => p.id === produtoId);
  if (!produto) return;
  
  const mensagem = `Olá! Tenho interesse no produto: ${produto.nome} - R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
  const whatsappUrl = `https://abrir.link/bOXtq?text=${encodeURIComponent(mensagem)}`;
  window.open(whatsappUrl, '_blank');
}

// Inicializar lojinha
document.addEventListener('DOMContentLoaded', function() {
  searchInput = document.getElementById('search');
  searchIcon = document.getElementById('search-icon');
  
  // Event listeners
  searchIcon.addEventListener('click', toggleBusca);
  searchInput.addEventListener('input', (e) => buscarProdutos(e.target.value));
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Escape') {
      toggleBusca();
    }
  });
  
  // Renderizar produtos iniciais
  renderizarProdutos();
});
const produtos = [
  {
    id: 1,
    nome: "Necessaire transparente",
    preco: 35.00,
    imagem: "assets/bolsinha.jpeg",
    categoria: "acessorios",
    descricao: "Necessaire linda e prática para organizar seus itens pessoais."
  },
  {
    id: 2,
    nome: "Estojo Autocuidado",
    preco: 28.00,
    imagem: "assets/estojo-autocuidado.jpeg",
    categoria: "acessorios",
    descricao: "Estojo especial para seus produtos de autocuidado. Ideal para fazer kits de higiene, maquiagem, manicure e muito mais!"
  },
  {
    id: 5,
    nome: "Copo Térmico Personalizado",
    preco: 30.00,
    imagem: "assets/produto1.jpg",
    categoria: "acessorios",
    descricao: "Copo térmico personalizado com nome, ideal para manter sua bebida na temperatura certa!"
  },
  {
    id: 6,
    nome: "Canetas Personalizadas",
    preco: 55.00,
    imagem: "assets/produto2.jpg",
    categoria: "acessorios",
    descricao: "Canetas personalizadas com o tema de sua preferência, perfeitas para lembrancinhas ou uso diário."
  },
  {
    id: 7,
    nome: "Necessaire Maletinha",
    preco: 40.00,
    imagem: "assets/produto3.jpg",
    categoria: "acessorios",
    descricao: "Necessaire em formato de maletinha com transparência frontal e personalizada. Ideal para organizar seus itens de forma prática e estilosa. É só escolher o tema e nós fazemos para você!",
  },
  {
    id: 8,
    nome: "Camisa Sublimada",
    preco: 32.00,
    imagem: "assets/produto4.jpg",
    categoria: "roupas",
    descricao: "Camisa sublimada personalizada com o tema de sua escolha. Confortável e estilosa, perfeita para qualquer ocasião."
  },
  {
    id: 10,
    nome: "Marca páginas Personalizados",
    preco: 65.00,
    imagem: "assets/produto6.jpg",
    categoria: "papelaria",
    descricao: "Marca páginas personalizados com o tema de sua escolha. Ótimos para presentear ou usar no dia a dia."
  },
  {
    id: 11,
    nome: "Necessaire transparente",
    preco: 85.00,
    imagem: "assets/produto9.jpg",
    categoria: "acessorios",
    descricao: "Necessaire linda e prática para organizar seus itens pessoais. Com design elegante e funcional, ideal para uso diário ou viagens."
  },
  {
    id: 12,
    nome: "Canecas Personalizadas",
    preco: 75.00,
    imagem: "assets/produto8.jpg",
    categoria: "acessorios",
    descricao: "Canecas personalizadas com o tema de sua escolha. Perfeitas para presentear ou para uso pessoal, trazendo um toque especial ao seu café ou chá."
  },
  {
    id: 16,
    nome: "Organizador de Gavetas",
    preco: 45.00,
    imagem: "assets/produto12.jpg",
    categoria: "organizacao",
    descricao: "Organizador de gavetas para roupas de bebê ou peças íntimas com 3 variações de formato e tamanho, personalizado para a sua necessidade. Ajuda a manter tudo no lugar e facilita na hora de escolher as roupinhas do dia."
  },
  {
    id: 22,
    nome: "Kit de Necessaires Impermeáveis",
    preco: 8.00,
    imagem: "assets/produto18.jpg",
    categoria: "acessorios",
    descricao: "Kit com 2 necessaires impermeáveis, espaçosas e perfeitas para organizar itens de higiene, maquiagem ou acessórios. Práticas e fáceis de limpar, ideais para viagens ou uso diário."
  },
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
  const whatsappUrl = `https://wa.me/55839987075415?text=${encodeURIComponent(mensagem)}`;
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

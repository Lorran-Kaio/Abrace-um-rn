// Dados das beneficiadas para os modais
const galeriaDados = [
  {
    id: 1,
    nome: "Maria Silva",
    descricao: "Maria é uma jovem mãe de 19 anos que deu à luz seu primeiro filho durante um período muito difícil financeiramente. Sem recursos para comprar os itens básicos para o bebê, ela recebeu todo o apoio necessário através do programa Abrace um RN.",
    tipoAjuda: "Kit Completo",
    imagem: "assets/img-galeria-1.jpg",
    alt: "Entrega de kits para recém-nascidos"
  },
  {
    id: 2,
    nome: "Ana Beatriz Santos",
    descricao: "Ana Beatriz, mãe de gêmeos, enfrentava dificuldades para conseguir roupinhas adequadas para seus bebês. Nossa equipe de voluntários organizou uma campanha especial para ajudá-la com tudo que precisava.",
    tipoAjuda: "Kit Roupinhas",
    imagem: "assets/img-galeria-2.jpg",
    alt: "Ação de distribuição de doações"
  },
  {
    id: 3,
    nome: "Carla Oliveira",
    descricao: "Durante nosso workshop educativo, Carla aprendeu técnicas essenciais de cuidados com recém-nascidos. Além do conhecimento, ela também recebeu um kit completo para auxiliar nos primeiros meses de vida do seu bebê.",
    tipoAjuda: "Kit Higiene",
    imagem: "assets/img-galeria-3.jpg",
    alt: "Workshop de cuidados com bebês"
  },
  {
    id: 4,
    nome: "Jéssica Costa",
    descricao: "Jéssica estava em uma situação de extrema vulnerabilidade social quando descobriu o projeto. Nossos voluntários não apenas forneceram os kits necessários, mas também ofereceram apoio emocional durante todo o processo.",
    tipoAjuda: "Kit Completo",
    imagem: "assets/img-galeria-4.jpg",
    alt: "Voluntários organizando doações"
  },
  {
    id: 5,
    nome: "Fernanda Lima",
    descricao: "Durante nosso evento beneficente, Fernanda compartilhou sua história de superação. Ela recebeu ajuda quando mais precisava e hoje é uma das nossas voluntárias mais ativas, ajudando outras mães.",
    tipoAjuda: "Kit Roupinhas",
    imagem: "assets/img-galeria-5.jpg",
    alt: "Evento beneficente da organização"
  },
  {
    id: 6,
    nome: "Patrícia Rodrigues",
    descricao: "Patrícia participou de nossas sessões de apoio pós-parto, onde recebeu orientação sobre amamentação, cuidados com o bebê e também todo o suporte material necessário para os primeiros meses.",
    tipoAjuda: "Kit Higiene",
    imagem: "assets/img-galeria-6.jpg",
    alt: "Mães recebendo apoio e orientação"
  },
  {
    id: 7,
    nome: "Luciana Mendes",
    descricao: "Através da parceria com instituições locais, conseguimos identificar Luciana que estava passando por dificuldades. Ela recebeu não apenas os kits necessários, mas também acompanhamento durante toda a gravidez.",
    tipoAjuda: "Kit Completo",
    imagem: "assets/img-galeria-7.jpg",
    alt: "Parceria com instituições locais"
  }
];

// Informações de contato
const contatoInfo = {
  whatsapp: "(83) 99999-9999",
  whatsappLink: "https://wa.me/5583999999999",
  instagram: "@abraceumrn",
  instagramLink: "https://instagram.com/abraceumrn"
};

// Função para inicializar a galeria
function initGaleria() {
  const galeriaImages = document.querySelectorAll('.galeria-img');
  
  galeriaImages.forEach((img, index) => {
    // Adicionar classe 'loaded' quando a imagem carregar para remover o shimmer
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
    
    // Se a imagem já estiver carregada
    if (img.complete) {
      img.classList.add('loaded');
    }
    
    // Adicionar evento de clique para abrir modal específico
    img.addEventListener('click', function() {
      openModal(galeriaDados[index]);
    });
  });
  
  // Animação de entrada escalonada para os itens
  initAnimations();
  
  // Otimizar layout responsivo
  initResponsiveLayout();
}

// Função para abrir o modal com dados específicos
function openModal(dados) {
  const modal = document.getElementById('galeriaModal');
  const modalImage = document.getElementById('modalImage');
  const modalNome = document.getElementById('modalNome');
  const modalDescricao = document.getElementById('modalDescricao');
  const modalTipoAjuda = document.getElementById('modalTipoAjuda');
  const modalWhatsapp = document.getElementById('modalWhatsapp');
  const modalInstagram = document.getElementById('modalInstagram');
  
  // Preencher dados do modal
  modalImage.src = dados.imagem;
  modalImage.alt = dados.alt;
  modalNome.textContent = dados.nome;
  modalDescricao.textContent = dados.descricao;
  modalTipoAjuda.textContent = dados.tipoAjuda;
  
  // Configurar links de contato
  modalWhatsapp.href = contatoInfo.whatsappLink;
  modalWhatsapp.textContent = contatoInfo.whatsapp;
  modalInstagram.href = contatoInfo.instagramLink;
  modalInstagram.textContent = contatoInfo.instagram;
  
  // Mostrar modal
  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

// Função para inicializar animações
function initAnimations() {
  const masonryItems = document.querySelectorAll('.masonry-item');
  
  // Observador de interseção para animar itens quando entram na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animationPlayState = 'running';
        }, index * 100);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  masonryItems.forEach(item => {
    item.style.animationPlayState = 'paused';
    observer.observe(item);
  });
}

// Função para layout responsivo
function initResponsiveLayout() {
  function optimizeMasonryLayout() {
    const grid = document.querySelector('.masonry-grid');
    if (!grid) return;
    
    if (window.innerWidth <= 768) {
      grid.style.columnCount = '1';
    } else if (window.innerWidth <= 1200) {
      grid.style.columnCount = '2';
    } else {
      grid.style.columnCount = '3';
    }
  }
  
  // Otimizar layout no carregamento e resize
  optimizeMasonryLayout();
  
  // Prevenir quebra de layout durante redimensionamento
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(optimizeMasonryLayout, 250);
  });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initGaleria);
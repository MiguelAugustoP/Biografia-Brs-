// =====================
// BOTÕES DO MENU
// =====================
const botoes = document.querySelectorAll('.menu-btn');
let indice = 0;

// =====================
// ÁUDIOS
// =====================
const bgm = document.getElementById("bgm");
const select = document.getElementById("select");
const confirm = document.getElementById("confirm");

// iniciar música após interação (necessário no mobile)
document.addEventListener("click", () => {
  if (bgm) {
    bgm.volume = 0.2;
    bgm.play();
  }
}, { once: true });

// =====================
// ATUALIZA VISUAL DO MENU
// =====================
function atualizarMenu() {
  botoes.forEach(btn => btn.classList.remove('ativo'));
  botoes[indice].classList.add('ativo');

  // som de navegação
  if (select) {
    select.currentTime = 0;
    select.volume = 0.5;
    select.play();
  }
}

// =====================
// TROCAR TELAS
// =====================
function trocar(id) {
  const telas = document.querySelectorAll('.tela');

  telas.forEach(t => t.classList.remove('ativa'));

  const alvo = document.getElementById(id);
  if (alvo) alvo.classList.add('ativa');
}

// =====================
// SELECIONAR ATUAL (ENTER)
// =====================
function selecionarAtual() {
  botoes[indice].click();

  if (confirm) {
    confirm.currentTime = 0;
    confirm.volume = 0.6;
    confirm.play();
  }
}

// =====================
// CONTROLE TECLADO
// =====================
document.addEventListener('keydown', (e) => {

  if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
    indice = (indice + 1) % botoes.length;
    atualizarMenu();
  }

  if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
    indice = (indice - 1 + botoes.length) % botoes.length;
    atualizarMenu();
  }

  if (e.key === 'Enter') {
    selecionarAtual();
  }

});

// =====================
// SINCRONIZA CLIQUE DO MOUSE
// =====================
botoes.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    indice = i;
    atualizarMenu();
  });
});

// =====================
// INICIALIZAÇÃO
// =====================
atualizarMenu();
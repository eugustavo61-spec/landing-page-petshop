// Seleciona os elementos que queremos animar
const elementosParaAnimar = document.querySelectorAll('.card-servico, .card-depoimento, .info-local');

// Cria o observador de rolagem
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            // Quando aparece na tela, adiciona a classe que faz a animação
            entrada.target.classList.add('mostrar');
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.2 // Dispara quando 20% do elemento estiver visível
});

// Adiciona a classe inicial oculta e manda observar
elementosParaAnimar.forEach(elemento => {
    elemento.classList.add('oculto');
    observador.observe(elemento);
});
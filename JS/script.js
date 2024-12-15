/** Função Curiosidades */
function toggleCuriosidades() {
    const details = document.getElementById('curiosidades');
    details.style.display = details.style.display === 'none' || !details.style.display ? 'block' : 'none';
}

/** Inicializar AOS */
document.addEventListener("DOMContentLoaded", function () {
    // Inicia AOS para animações ao rolar
    AOS.init({
        duration: 1000, // Duração das animações
        easing: 'ease-in-out', // Efeito de transição suave
        once: true // Animações ocorrem apenas uma vez ao rolar a página
    });
});

/** Efeito de envio no formulário */
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
      e.preventDefault(); // Previne o envio real do formulário
      alert('Mensagem enviada com sucesso!'); // Mensagem de sucesso
      form.reset(); // Limpa o formulário após o envio
  });

/**Seção do QR Code */
document.getElementById('show-qr').addEventListener('click', function() {
    const qrContainer = document.getElementById('qr-container');
    const qrCodeImg = document.getElementById('qr-code');

    // Gera o QR Code direcionando para o URL atual do site
    const siteUrl = window.location.href;

    if (!qrCodeImg.src) {
        // Gera o QR Code
        QRCode.toDataURL(siteUrl, { errorCorrectionLevel: 'L' }, function (err, url) {
            if (err) throw err;
            qrCodeImg.src = url; // Define a imagem do QR Code gerado
        });
    }

    // Exibe o QR Code
    qrContainer.style.display = 'block';
});
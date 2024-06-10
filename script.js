document.getElementById("view-memories").addEventListener("click", function () {
  const memories = [
    {
      image: "images/photo1.jpeg",
      message:
        "Eu te amo. Eu sou quem eu sou por sua causa. Você é toda razão, toda esperança e todo sonho que eu já tive.",
    },
    {
      image: "images/photo2.jpeg",
      message: "Você é tudo o que eu sempre quis e tudo o que eu preciso.",
    },
    {
      image: "images/photo3.jpeg",
      message: "Quando estou com você, nada mais importa.",
    },
    {
      image: "images/photo4.jpeg",
      message:
        "Eu te amo mais do que eu jamais pensei ser possível amar alguém.",
    },
    {
      image: "images/photo5.jpeg",
      message: "Você é a única pessoa que consegue me acalmar.",
    },
    {
      image: "images/photo6.jpeg",
      message:
        "Quando estou com você, sinto que finalmente encontrei meu lugar no mundo.",
    },
    {
      image: "images/photo7.jpeg",
      message:
        "Eu não sabia que era possível amar alguém tanto assim até conhecer você.",
    },
    {
      image: "images/photo8.jpeg",
      message: "Você é a razão de eu acreditar no amor verdadeiro.",
    },
    {
      image: "images/photo9.jpeg",
      message:
        "Cada momento com você é um momento que eu guardarei para sempre.",
    },
    {
      image: "images/photo10.png",
      message:
        "Esta é apenas a primeira parte da nossa história. Prepare-se para mais memórias incríveis que ainda estão por vir. Eu te amo hoje, amanhã e sempre.",
    },
    // Adicione mais memórias aqui
  ];

  const container = document.getElementById("memories-container");
  container.innerHTML = ""; // Limpa o container

  memories.forEach((memory) => {
    const memoryElement = document.createElement("div");
    memoryElement.className = "memory";

    const img = document.createElement("img");
    img.src = memory.image;
    memoryElement.appendChild(img);

    const message = document.createElement("p");
    message.textContent = memory.message;
    memoryElement.appendChild(message);

    container.appendChild(memoryElement);
  });

  container.style.display = "block";

  // Exibir mensagem final
  document.getElementById("final-message").style.display = "block";
});

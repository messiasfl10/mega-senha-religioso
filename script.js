const words = [
    // Termos bíblicos e espirituais
    "Jesus","Maria","José","Bíblia","Fé","Oração","Igreja","Missa","Pecado","Perdão",
    "Ressurreição","Crucificação","Anjo","Espírito Santo","Trindade","Evangelho","Milagre",
    "Graça","Amor","Esperança","Caridade","Salvação","Santidade","Benção","Céu","Deus","Cristo",
    "Páscoa","Pentecostes","Glória","Mandamento","Paraíso","Cruz","Altar","Jejum",

    // Sacramentos
    "Batismo","Crisma","Eucaristia","Confissão","Matrimônio",

    // Santos e Santas
    "São Pedro","São Paulo","São João","Santo Antônio","São Francisco","São Bento","Santo Agostinho",
    "Santa Terezinha","São Pio","São Sebastião",
    "São Miguel Arcanjo","São Gabriel","São Rafael",

    // Papas e títulos da Igreja
    "Papa Francisco","Papa João Paulo II","Vaticano",
    "Bispo","Padre","Pároco","Monge","Abade","Arcebispo"
];

const wordDisplay = document.getElementById("word");
const newWordBtn = document.getElementById("newWord");

newWordBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  wordDisplay.classList.remove("show");
  setTimeout(() => {
    wordDisplay.textContent = randomWord;
    wordDisplay.classList.add("show");
  }, 200);
});

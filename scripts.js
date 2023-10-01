const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character")
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const buttonSelect = document.querySelector(".button.selecionado")
        buttonSelect.classList.remove("selecionado")

        const characterSelect = document.querySelector(".character.selecionado")
        characterSelect.classList.remove("selecionado")

        button.classList.add("selecionado") // adc class SELECIONADO quando clicar em algum botão
        characters[index].classList.add("selecionado")
    });
});
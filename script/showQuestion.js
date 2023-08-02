export function showQuestions(index) {
    const questionText = document.querySelector(".question-text");
    questionText.textContent = `${questions[index].num}. ${questions[index].question}`;

    const optionList = document.querySelector(".option-list");
    optionList.innerHTML = "";

    for (let i = 0; i < questions[index].options.length; i++) {
        const option = document.createElement("div");
        option.classList.add("option");

        const span = document.createElement("span");
        span.textContent = questions[index].options[i];

        option.appendChild(span);
        optionList.appendChild(option);
    }

    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.addEventListener("click", () => optionSelected(option));
    });
}
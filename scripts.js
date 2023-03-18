// scripts.js
// この例では、実際のバックエンドやデータベースにはアクセスせず、ダミーデータを使用しています。
const currentTopic = "現在のお題です";
const answers = [
    { id: 1, text: "回答1", likes: 3 },
    { id: 2, text: "回答2", likes: 1 },
];

document.getElementById("current-topic").textContent = currentTopic;

const answerList = document.getElementById("answer-list");
answers.forEach(answer => {
    const listItem = document.createElement("li");
    listItem.textContent = `${answer.text} - いいね: ${answer.likes}`;
    answerList.appendChild(listItem);
});

document.getElementById("answer-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const answerInput = document.getElementById("answer-input");
    const newAnswer = answerInput.value.trim();
    if (newAnswer) {
        console.log("新しい回答:", newAnswer);
        answerInput.value = "";
    }
});

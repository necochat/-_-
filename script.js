const allCards = [
    "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
    "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
    "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
    "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World",
    "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups",
    "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups",
    "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",
    "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles",
    "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles",
    "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles",
    "Queen of Pentacles", "King of Pentacles",
    "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords",
    "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords",
    "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords",
    "Queen of Swords", "King of Swords",
    "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands",
    "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands",
    "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands",
    "Queen of Wands", "King of Wands"
];

// 카드 선택 dropdown 초기화
function initializeCardSelects() {
    for (let i = 1; i <= 3; i++) {
        const cardSelect = document.getElementById(`card-select-${i}`);
        allCards.forEach(card => {
            const option = document.createElement('option');
            option.value = card;
            option.textContent = card;
            cardSelect.appendChild(option);
        });
    }
}

// 선택 완료 함수
function submitSelection() {
    const category = document.getElementById('category-select').value;
    const pastCard = document.getElementById('card-select-1').value;
    const pastDirection = document.getElementById('direction-select-1').value;
    const presentCard = document.getElementById('card-select-2').value;
    const presentDirection = document.getElementById('direction-select-2').value;
    const futureCard = document.getElementById('card-select-3').value;
    const futureDirection = document.getElementById('direction-select-3').value;

    const result = `카테고리는 ${category}이고,\n뽑은 카드는:\n과거(${pastCard} / ${pastDirection}),\n현재(${presentCard} / ${presentDirection}),\n미래(${futureCard} / ${futureDirection})야.\n해석해줘.`;

    document.getElementById('result').innerText = result;
}

// GPT에 전송하는 함수 (자동 복사 및 링크 이동 포함)
function sendToGPT() {
    const resultText = document.getElementById('result').innerText;
    const encodedResult = encodeURIComponent(resultText);
    const gptURL = `https://chatgpt.com/g/g-673df7b786fc8191b0af2610d0e7a713-simyeonyi-taroiseuteu/?prompt=${encodedResult}`;

    // 클립보드에 복사
    navigator.clipboard.writeText(resultText).then(() => {
        alert('복사되었습니다! GPT에 붙여넣기 해주세요.');
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다. 다시 시도해 주세요.');
    });

    // 링크를 새 창에서 열기
    document.getElementById('gpt-link').href = gptURL;
    document.getElementById('gpt-link').click();
}

// 초기화 실행
initializeCardSelects();

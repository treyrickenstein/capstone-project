 categories = [
    ["dallas-cowboys", "new-england-patriots", "minnesota-vikings", "philadelphia-eagles", "washington-commanders", "cincinnati-bengals", "denver-broncos"],
    ["varsity-blues", "space-jam", "caddyshack", "red-notice", "the-batman", "lethal-weapon", "rush-hour"],
    ["cairo", "istanbul", "barcelona", "dallas", "prague"]
    ];
function chooseCategory() {

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    randomWord = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    randomWord = randomWord.replace(/\s/g, "-");
    console.log(randomWord);
}

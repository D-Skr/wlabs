// Guess the Gifts

var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

const result = guessGifts(wishlist, presents);
console.log(result);

function guessGifts(wishlist, presents) {
  const result = new Set();
  for (let wish of wishlist) {
    for (let present of presents) {
      if (
        wish.size == present.size &&
        wish.clutters == present.clutters &&
        wish.weight == present.weight
      ) {
        result.push(wish.name);
      }
    }
  }
  return result;
}

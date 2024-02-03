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

// const result = guessGifts(wishlist, presents);
// console.log(result);

// v.1
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

// v.2
function doAttributesMatch(wish, present) {
  return (
    wish.size === present.size &&
    wish.clatters === present.clatters &&
    wish.weight === present.weight
  );
}

function guessGifts2(wishlist, presents) {
  return wishlist
    .filter((wish) => {
      // return TRUE if we are supposed to keep the item, i.e. the item has attributes matching one of the presents
      return presents.some((present) => {
        // return TRUE if any present satisfies the condition - do the attributes match.
        return doAttributesMatch(wish, present);
      });
    })
    .map((wish) => wish.name);
}

const result2 = guessGifts2(wishlist, presents);
console.log(result2);

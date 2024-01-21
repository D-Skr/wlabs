function tShirtSorter(s) {
  return s.split("").sort().reverse().join("");
}

let s = "smllmsllsssmmm";
console.log(tShirtSorter(s));

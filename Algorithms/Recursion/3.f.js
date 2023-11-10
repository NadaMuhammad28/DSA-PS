const artistsByGenre = {
  jazz: ["Miles Davis", "John Coltrane"],
  rock: {
    classic: ["Bob Seger", "The Eagles"],
    hair: ["Def Leppard", "Whitesnake", "Poison"],
    alt: {
      classic: ["Pearl Jam", "The Killers"],
      current: ["Joywave", "Sir Sly"],
    },
  },
  unclassified: {
    new: ["Caamp", "Neil Young"],
    classic: ["Seal", "Morcheeba", "Chris Stapleton"],
  },
};

const generate = (obj, res = []) => {
  Object.values(obj).forEach((ob) => {
    if (Array.isArray(ob)) {
      return res.push(...ob);
    } else {
      generate(ob, res);
    }
  });

  return res;
};
console.log(generate(artistsByGenre));

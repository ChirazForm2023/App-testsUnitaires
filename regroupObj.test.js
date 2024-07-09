const regroupObj = require("./regroupObj");

test("gives for [{titre :'les misérables', auteur : 'Victor Hugo'},{titre :'Ruyblas', auteur : 'Victor Hugo'}, {titre :'Gargantua', auteur : 'Rabelais'} ", () => {
  const Tab = [
    { titre: "les misérables", auteur: "Hugo" },
    { titre: "Ruyblas", auteur: "Hugo" },
    { titre: "Gargantua", auteur: "Rabelais" },
  ];
  const tabgroupe = {
    Hugo: [
      { titre: "les misérables", auteur: "Hugo" },
      { titre: "Ruyblas", auteur: "Hugo" },
    ],
    Rabelais: [{ titre: "Gargantua", auteur: "Rabelais" }],
  };
  expect(regroupObj(Tab, "auteur")).toEqual(tabgroupe);
});

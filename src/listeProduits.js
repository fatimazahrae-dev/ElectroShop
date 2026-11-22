import Produit from "./produit";
import casque from "./casque.jpg";
import montre from "./montre.jpg";
import ordinateur from "./ordinateur.jpg";
import smartphone from "./smartphone.jpg";
import souris from "./souris.jpg";

export default function ListeProduit() {
  const produits = [
    {
      id: 1,
      titre: "Ordinateur portable",
      prix: 6500,
      categorie: "Informatique",
      image: ordinateur
    },
    {
      id: 2,
      titre: "Smartphone",
      prix: 2500,
      categorie: "Téléphonie",
      image: smartphone
    },
    {
      id: 3,
      titre: "Casque Bluetooth",
      prix: 450,
      categorie: "Audio",
      image: casque
    },
    {
      id: 4,
      titre: "Souris sans fil",
      prix: 150,
      categorie: "Accessoires informatiques",
      image: souris
    },
    {
      id: 5,
      titre: "Montre connectée",
      prix: 800,
      categorie: "Objets connectés",
      image: montre
    }
  ];

  return (
    <div className="container mt-3">
      <div className="row">
        {produits.map((p) =>
          <div className="col-md-4 mb-3" key={p.id}>
            <Produit
              titre={p.titre}
              prix={p.prix}
              img={p.image}
            />
          </div>
        )}
      </div>
    </div>
  );
}

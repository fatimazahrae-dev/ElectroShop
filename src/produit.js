export default function Produit(props) {
  return (
    <div className="card h-100">
      <img
        className="card-img-top"
        src={props.img}
        alt={props.titre}
      />

      <div className="card-body">
        <h4 className="card-title">{props.titre}</h4>

        <p className="card-text" style={{ color: "green" }}>
          Prix : {props.prix} DH
        </p>

        <a href="#" className="btn btn-primary">
          Ajouter au panier
        </a>
      </div>
    </div>
  );
}


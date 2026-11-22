
export default function Header() {
  return (
    <ul style={{
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: '#333333'
    }}>
       <b><li style={{

            float: 'left',
          display: 'block',
          color: 'white',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none',
          
        }} >
            ElecroShop
        </li></b> 
      <li style={{ float: 'left' }}>
        <a href="#home" style={{
          display: 'block',
          color: 'white',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none',
          
        }}>
          Accueil
        </a>
      </li>

      <li style={{ float: 'left' }}>
        <a href="#news" style={{
          display: 'block',
          color: 'white',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none'
        }}>
          Produits
        </a>
      </li>

      <li style={{ float: 'left' }}>
        <a href="#contact" style={{
          display: 'block',
          color: 'white',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none'
        }}>
          A Propos
        </a>
      </li>

      <li style={{ float: 'left' }}>
        <a href="#about" style={{
          display: 'block',
          color: 'white',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none'
        }}>
         Contact
        </a>
      </li>

        <button style={{
         float: 'right',
         backgroundColor: '#04AA6D',
         color: 'white',
         padding: '14px 16px',
         border: 'none',
         cursor: 'pointer'
}}>
  Panier
</button>
    </ul>
  );
}

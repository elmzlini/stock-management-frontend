export default function CriticalStockTable({ products }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>Produit</th>
          <th>Catégorie</th>
          <th>Stock</th>
          <th>Seuil</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td style={{ color: p.stock === 0 ? 'red' : 'orange' }}>
              {p.stock}
            </td>
            <td>{p.minStock}</td>
            <td>
              <button>Réapprovisionner</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  }
}

import ProductRow from './ProductRow';

export default function ProductTable({ products, onRestock, onEdit }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Catégorie</th>
          <th>Stock</th>
          <th>Seuil min</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <ProductRow key={p.id} product={p} onRestock={onRestock} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  )
}

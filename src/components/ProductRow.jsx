export default function ProductRow({ product, onRestock, onEdit }) {
  const stockColor = product.stock === 0 ? 'red' : product.stock <= product.minStock ? 'orange' : 'green';

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td style={{ color: stockColor }}>{product.stock}</td>
      <td>{product.minStock}</td>
      <td>
        <button onClick={() => onEdit(product)}>✏️</button>
        <button onClick={() => onRestock(product)}>🔄</button>
      </td>
    </tr>
  )
}

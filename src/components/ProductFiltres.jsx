export default function ProductFilters({ search, setSearch, category, setCategory, stockFilter, setStockFilter }) {
  return (
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
      <input
        placeholder="Recherche produit..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Toutes les catégories</option>
        <option value="Fournitures">Fournitures</option>
        <option value="Écriture">Écriture</option>
      </select>

      <select value={stockFilter} onChange={e => setStockFilter(e.target.value)}>
        <option value="">Tout stock</option>
        <option value="critical">Critique</option>
        <option value="ok">OK</option>
      </select>
    </div>
  )
}

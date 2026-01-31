export default function KpiCard({ title, value, color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.card,
        borderLeft: `6px solid ${color}`,
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <h4>{title}</h4>
      <p style={styles.value}>{value}</p>
    </div>
  )
}

const styles = {
  card: {
    padding: '1rem',
    background: '#f8fafc',
    borderRadius: '8px',
    minWidth: '200px'
  },
  value: {
    fontSize: '1.8rem',
    fontWeight: 'bold'
  }
}

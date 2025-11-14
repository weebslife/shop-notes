export default function Footer( {items}) {
  if (items.length === 0 ) return <footer className="stats" >Yeay! kamu tidak punya daftar belanja</footer>
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentChecked = totalItems === 0 ? 0 : Math.round((checkedItems / totalItems) * 100);
  return (
   <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentChecked}%)</footer>
  )
}
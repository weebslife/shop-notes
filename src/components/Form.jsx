import { useState } from "react";
export default function Form( {onAddItem} ) {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(el) {
    el.preventDefault();

    if(!name ) {
      alert('Nama barang tidak boleh kosong!');
    }

    const newItem = {
      name, quantity, checked: false, id: Date.now(),
    };
    onAddItem(newItem);
    console.log(newItem);

    setName('');
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i+1} key={i+1}>{i+1} </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select value={quantity} onChange={(el) => setQuantity(Number(el.target.value))}>
            {quantityNum}
          </select>
          {/* cara ngambil objek di satu elemen yang sama */}
          <input type="text" placeholder="nama barang..." value={name} onChange={(el) => setName(el.target.value)} /> 
        </div>
        <button>Tambah</button>
      </form>
  )
}
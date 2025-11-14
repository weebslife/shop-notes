import { useState } from "react";
export default function Form( {onAddItem} ) {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  function handleSubmit(el) {
    el.preventDefault();

    if (!name.trim()) {
      alert('Nama barang tidak boleh kosong!');
    }

    if (quantity <= 0 || quantity === "") {
      setError("Jumlah barang harus lebih dari 0!");
      return;
    }

    setError("");

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      quantity: Number(quantity),
      checked: false,
    };

    onAddItem(newItem);
    // console.log(newItem);

    setName('');
    setQuantity(1);
  }

  // Kalo mau pakai select dropdown untuk quantity
  // const quantityNum = [...Array(20)].map((_, i) => (
  //   <option value={i+1} key={i+1}>{i+1} </option>
  // ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <input
            type="number"
            min="1"
            placeholder="Qty"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
              setError(""); 
            }}
            />
          {/* <select value={quantity} onChange={(el) => setQuantity(Number(el.target.value))}>
            {quantityNum}
          </select> */}
          {/* cara ngambil objek di satu elemen yang sama */}
          <input type="text" placeholder="nama barang..." value={name} onChange={(el) => {setName(el.target.value); setError(""); }}  /> 
        </div>
        {error && <p className="error-text">{error}</p>}
        <button>Tambah</button>
      </form>
  )
}
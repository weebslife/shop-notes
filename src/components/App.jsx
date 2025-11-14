import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GrocerlyList";
import Footer from "./Footer";

const LOCAL_STORAGE_KEY = "shop-notes.items";


const defaultItems = [
  { id: 1, name: 'Minyak goreng', quantity: 1, checked: true },
  { id: 2, name: 'Mie instant', quantity: 5, checked: false },
  { id: 3, name: 'Air Mineral', quantity: 3, checked: false },
]

export default function App() {

  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (err) {
      console.error("Error reading lomcal storage:", err);
    }
    return defaultItems;
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.error("Error menyimpan ke localStorage:", err);
    }
  }, [items]);

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }


  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  return (
    <div className ="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
      
      
    </div>
  )
}

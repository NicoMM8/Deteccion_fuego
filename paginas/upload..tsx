import { useState } from 'react';
import Layout from '../components/Layout';

export default function Upload() {
  const [result, setResult] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await fetch('/api/predict', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Subida de Archivos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" name="file" accept="image/*" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Subir Imagen
        </button>
      </form>
      {result && <p className="mt-4 font-medium">Resultado: {result}</p>}
    </Layout>
  );
}

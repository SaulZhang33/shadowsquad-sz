
import React, { useState } from 'react';
import Papa from 'papaparse';

export default function Home() {
  const [data, setData] = useState<string[][]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    Papa.parse(file, {
      complete: (result) => {
        setData(result.data as string[][]);
      },
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>CSV 文件查看器</h1>
      <input type="file" accept=".csv" onChange={handleUpload} />
      <table border={1} cellPadding={5} style={{ marginTop: "20px" }}>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

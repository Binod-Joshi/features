import React, { useState } from 'react'

const QrCodeGenerator = () => {
    const [url, setUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="url" placeholder='Enter a url to generate qr code' onChange={(e) => setUrl(e.target.value)} />
      <button type='submit'> Generate QR Code</button>
      </form>
      <img src={`https://chart.googleapis.com/chart?cht=qr&chs=180*180&chl=https://www.playerofcode.in`} alt="QR Code" />
    </div>
  )
}

export default QrCodeGenerator

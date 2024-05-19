import QRCode from 'qrcode'
import { useState } from 'react'

const QrCodeGenerator = () => {
  const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 400,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Generator</h1>
			<div style={{display:'flex',alignItems:"center",justifyContent:"center",gap:"10px",marginBottom:"20px"}}>
      <input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)}
        style={{height:"30px"}} />
			<button onClick={GenerateQRCode}>Generate</button>
      </div>
			{qr && <>
				<div style={{display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"10px"}}>
        <img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
        </div>
			</>}
		</div>
	)
}

export default QrCodeGenerator

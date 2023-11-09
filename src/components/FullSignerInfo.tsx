import { useAtom } from 'jotai'
import signerAtom from 'atoms/signerAtom'

export default function () {
  const [signer] = useAtom(signerAtom)
  return (
    <div>
      <div>
        <code>signerUUID: {signer.signerUUID}</code>
      </div>
      <div>
        <code>apiKey: {signer.apiKey}</code>
      </div>
      <h3>Some more info on Signer:</h3>
      <div>
        <code>Public key: {signer.signerPublicKey}</code>
      </div>
      {signer.signerFID && (
        <div>
          <code>FID: {signer.signerFID}</code>
        </div>
      )}
    </div>
  )
}

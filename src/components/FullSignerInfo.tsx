import { useAtom } from 'jotai'
import Link from 'components/Link'
import RequestSigner from 'components/RequestSigner'
import signerAtom from 'atoms/signerAtom'

export default function () {
  const [signer] = useAtom(signerAtom)
  return !signer ? (
    <RequestSigner />
  ) : (
    <div>
      <p>
        If everything is approved, you can plug in the signer UUID and the API
        key below into the{' '}
        <Link url="https://github.com/standard-crypto/farcaster-js/blob/develop/packages/farcaster-js-neynar/README.md#publish-a-cast">
          "Publish a Cast" snippet in the documentation
        </Link>
        !
      </p>
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

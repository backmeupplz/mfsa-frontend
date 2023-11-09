import { useAtom } from 'jotai'
import Link from 'components/Link'
import QRCode from 'react-qr-code'
import RequestSigner from 'components/RequestSigner'
import signerAtom from 'atoms/signerAtom'

export default function () {
  const [signer] = useAtom(signerAtom)
  return !signer ? (
    <RequestSigner />
  ) : (
    <div>
      <p>
        Login to the bot's account on a mobile device, scan the following QR
        code (or go to the mentioned URL) and approve the app. Do not close or
        refresh this page.
      </p>
      <h3>iOS</h3>
      <QRCode value={signer.iosUrl} />
      <p>
        Scan the QR code or manually open{' '}
        <Link url={signer.iosUrl}>the URL</Link>.
      </p>
      <h3>Android</h3>
      <QRCode value={signer.androidUrl} />
      <p>
        Scan the QR code or manually open{' '}
        <Link url={signer.androidUrl}>the URL</Link>.
      </p>
    </div>
  )
}

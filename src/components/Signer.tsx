import QRCodes from 'components/QRCodes'
import SuspenseWithError from 'components/SuspenseWithError'

export default function () {
  return (
    <div>
      <h2>1. Approve the signer</h2>
      <p>
        Login to the bot's account on a mobile device, scan the following QR
        code (or go to the mentioned URL) and approve the app. Do not close or
        refresh this page.
      </p>
      <SuspenseWithError
        errorText="Failed to load signer"
        fallback={<p>Loading...</p>}
      >
        <QRCodes />
      </SuspenseWithError>
    </div>
  )
}

import { useAtom } from 'jotai'
import QRCodes from 'components/QRCodes'
import SuspenseWithError from 'components/SuspenseWithError'
import getSigner from 'helpers/getSigner'
import signerAtom from 'atoms/signerAtom'

function GetSignerButton() {
  const [signer, setSigner] = useAtom(signerAtom)
  return signer ? null : (
    <button
      class="btn btn-primary"
      onClick={() => {
        setSigner(getSigner())
      }}
    >
      Get the signer!
    </button>
  )
}

export default function () {
  return (
    <div>
      <h2>1. Approve the signer</h2>
      <SuspenseWithError
        errorText="Failed to load signer"
        fallback={<p>Loading...</p>}
      >
        <GetSignerButton />
        <QRCodes />
      </SuspenseWithError>
    </div>
  )
}

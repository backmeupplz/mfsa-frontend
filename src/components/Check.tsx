import CheckSigner from 'components/CheckSigner'
import SuspenseWithError from 'components/SuspenseWithError'

export default function () {
  return (
    <div>
      <h2>2. Check if the signer is approved</h2>
      <SuspenseWithError
        errorText="Failed to load signer"
        fallback={<p>Loading...</p>}
      >
        <CheckSigner />
      </SuspenseWithError>
    </div>
  )
}

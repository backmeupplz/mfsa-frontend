import FullSignerInfo from 'components/FullSignerInfo'
import SuspenseWithError from 'components/SuspenseWithError'

export default function () {
  return (
    <div>
      <h2>3. Use the signer UUID</h2>
      <SuspenseWithError
        errorText="Failed to load signer"
        fallback={<p>Loading...</p>}
      >
        <FullSignerInfo />
      </SuspenseWithError>
    </div>
  )
}

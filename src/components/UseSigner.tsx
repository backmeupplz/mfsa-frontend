import FullSignerInfo from 'components/FullSignerInfo'
import Link from 'components/Link'
import SuspenseWithError from 'components/SuspenseWithError'

export default function () {
  return (
    <div>
      <h2>3. Use the signer UUID</h2>
      <p>
        If everything is approved, you can plug in the signer UUID and the API
        key below into the{' '}
        <Link url="https://github.com/standard-crypto/farcaster-js/blob/develop/packages/farcaster-js-neynar/README.md#publish-a-cast">
          "Publish a Cast" snippet in the documentation
        </Link>
        !
      </p>
      <SuspenseWithError
        errorText="Failed to load signer"
        fallback={<p>Loading...</p>}
      >
        <FullSignerInfo />
      </SuspenseWithError>
    </div>
  )
}

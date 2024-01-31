import Check from 'components/Check'
import Description from 'components/Description'
import Enjoy from 'components/Enjoy'
import Link from 'components/Link'
import Signer from 'components/Signer'
import UseSigner from 'components/UseSigner'

export default function () {
  return (
    <div className="container mx-auto max-w-prose p-10 prose">
      <h1>Make Farcaster simple again</h1>
      <div role="alert" class="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          Warning: MFSA was shut down! Use official{' '}
          <Link url="https://neynar.com">Neynar</Link> dev portal to get both
          the Signer UUID and the API key.
        </span>
      </div>
      <Description />
      <Signer />
      <Check />
      <UseSigner />
      <Enjoy />
    </div>
  )
}

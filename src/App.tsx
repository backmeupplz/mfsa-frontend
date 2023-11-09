import Check from 'components/Check'
import Description from 'components/Description'
import Enjoy from 'components/Enjoy'
import Signer from 'components/Signer'
import UseSigner from 'components/UseSigner'

export default function () {
  return (
    <div className="container mx-auto max-w-prose p-10 prose">
      <h1>Make Farcaster simple again</h1>
      <Description />
      <Signer />
      <Check />
      <UseSigner />
      <Enjoy />
    </div>
  )
}

import Link from 'components/Link'

export default function () {
  return (
    <div>
      <h2>4. Enjoy!</h2>
      <p>
        Congratulations! Now you have everything you needed to start casting. I
        would ask you <b>not</b> to share the API key with anyone (otherwise
        I'll have to shut down the API) and carefuly use it. Also consider
        following <Link url="https://warpcast.com/borodutch">@borodutch</Link>.
        Cheers!
      </p>
      <p>
        P.S., the code for{' '}
        <Link url="https://github.com/backmeupplz/mfsa-frontend">
          this website
        </Link>{' '}
        and{' '}
        <Link url="https://github.com/backmeupplz/mfsa-backend">
          its backend
        </Link>{' '}
        is open source and free to use.
      </p>
    </div>
  )
}

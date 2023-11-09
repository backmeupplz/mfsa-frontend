import Link from 'components/Link'

export default function () {
  return (
    <div>
      <h2>WTF is this?</h2>
      <p>
        Gm, this is <Link url="https://warpcast.com/borodutch">@borodutch</Link>
        . I recently wrote{' '}
        <Link url="https://bit.ly/farcaster-development">a tutorial</Link> on
        how to use{' '}
        <Link url="https://github.com/standard-crypto/farcaster-js">
          the new Farcaster API
        </Link>
        . You might have noticed that it is now quite difficult to build simple
        bots like <Link url="https://warpcast.com/healthbot">@healthbot</Link>,{' '}
        <Link url="https://warpcast.com/gpt">@gpt</Link> and{' '}
        <Link url="https://warpcast.com/remindme">@remindme</Link> on Farcaster
        because the focus has shifted towards supporting third-party client
        developers for Farcaster. One can no longer use a simple seed phrase to
        do:
      </p>
      <code>client.publishCast(text)</code>
      <p>
        Also it now costs at least $49/month to use{' '}
        <Link url="https://neynar.com">Neynar</Link> to host a hub for you.
        Obviously, it is not ideal to tinker with launching a whole hub or
        paying $49/month just to build a simple bot. This is where I come to
        your rescue. Follow the steps below to get the <code>signerUUID</code>{' '}
        and the <code>apiKey</code> mentioned{' '}
        <Link url="https://github.com/standard-crypto/farcaster-js/blob/develop/packages/farcaster-js-neynar/README.md#publish-a-cast">
          in the documentation
        </Link>{' '}
        that you need to start writing to Farcaster.
        <p>
          No need to figure out all this complicated stuff with signers or pay
          anyone just to build a simple utility bot. You follow the steps below,
          get your Warps to me (lmao) and get started in no time!
        </p>
      </p>
    </div>
  )
}

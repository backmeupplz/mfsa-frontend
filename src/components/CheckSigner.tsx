import { useAtom } from 'jotai'
import { useState } from 'preact/hooks'
import getSignerStatus from 'helpers/getSignerStatus'
import signerAtom from 'atoms/signerAtom'

export default function () {
  const [signer] = useAtom(signerAtom)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'unknown' | 'pending' | 'approved'>(
    'unknown'
  )

  async function checkStatus() {
    setLoading(true)
    try {
      const { status } = await getSignerStatus(signer.signerUUID)
      if (status === 'pending_approval') {
        setStatus('pending')
      } else if (status === 'approved') {
        setStatus('approved')
      } else {
        setStatus('unknown')
      }
    } catch (error) {
      console.error(error || 'Unknown error')
      setStatus('unknown')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        class="btn btn-primary"
        onClick={() => {
          void checkStatus()
        }}
        disabled={loading}
      >
        {loading ? '🤔 Checking...' : 'Check!'}
      </button>
      <p>Status: {status}</p>
    </div>
  )
}

import UUIDResponse from 'models/UUIDResponse'

export default async function () {
  const data = await (await fetch('https://backend.mfsa.cc/uuid')).json()
  return data as UUIDResponse
}

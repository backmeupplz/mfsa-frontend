export default async function (uuid: string) {
  const data = await (
    await fetch(`https://backend.mfsa.cc/uuid/status/${uuid}`)
  ).json()
  return data as {
    status: string
  }
}

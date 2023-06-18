const Lit = LitJsSdk_litNodeClient

const client = new Lit.LitNodeClient({ debug: true })

client.connect()

export { Lit, client }

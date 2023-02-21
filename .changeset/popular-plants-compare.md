---
'@wagmi/connectors': minor
---

**Breaking:** Removed the `version` config option for `WalletConnectConnector`.

`WalletConnectConnector` now uses WalletConnect v2 by default. WalletConnect v1 is now `WalletConnectConnectorV1`.

### WalletConnect v1

```diff
-import { WalletConnectConnector } from '@wagmi/connectors/walletConnect'
+import { WalletConnectConnector } from '@wagmi/connectors/walletConnectV1'

-const connector = new WalletConnectConnector({
+const connector = new WalletConnectV1Connector({
  options: {
    qrcode: true,
  },
})
```

### WalletConnect v2

```diff
import { WalletConnectConnector } from '@wagmi/connectors/walletConnect'

const connector = new WalletConnectConnector({
  options: {
-   version: '2',
    projectId: 'abc',
    qrcode: true,
  },
})
```
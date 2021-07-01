## use HTTPS (Guide ONLY for macOS)

- `brew install mkcert`

- `mkcert -install`

- `mkcert -cert-file cert.crt -key-file cert.key localhost ::1 127.0.0.1 192.168.169.99`

ip `192.168.169.99` is my WLAN ip, pls replace to yourself.

signature completed, move `cert.crt` and `cert.key` to this dir.

CRA [HTTPS Guider](https://create-react-app.dev/docs/using-https-in-development/).

and then `yarn devs` start, more detailed pls see `package.json`.




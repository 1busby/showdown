// https://codeburst.io/automate-your-deployment-process-with-pm2-b0fd7c256223


module.exports = {
  apps: [
    {
      name: 'brackets',
      script: 'dist/main.js',
      node_args: '-r ./tsconfig-paths-bootstrap.js',
      env: {
        DATABASE_URL:
          'mongodb+srv://alex:keznH2XVg9efQtu4@cluster0-cez0a.mongodb.net/brackets?retryWrites=true&w=majority',
        PORT: 3000,
        ISPRODUCTION: false,
        CRT,
        KEY,
        BUNDLE
      },
      env_production: {
        DATABASE_URL:
          'mongodb+srv://alex:keznH2XVg9efQtu4@cluster0-cez0a.mongodb.net/brackets?retryWrites=true&w=majority',
        PORT: 3000,
        ISPRODUCTION: false,
      },
    },
  ],

  deploy: {
    production: {
      key: '~/.ssh/brackets-0.pem',
      user: 'ubuntu',
      host: '54.204.160.247',
      ref: 'origin/master',
      repo: 'git@github.com:mbusbyHub/brackets.git',
      path: '/home/ubuntu/brackets',
      'pre-deploy-local': '',
      'post-deploy':
        './startup.sh',
    },
  },
};

var CRT = `-----BEGIN CERTIFICATE-----
MIIFxzCCBK+gAwIBAgIRANOHO7A3Kh3n6dDd72n7eGgwDQYJKoZIhvcNAQELBQAw
gY8xCzAJBgNVBAYTAkdCMRswGQYDVQQIExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAO
BgNVBAcTB1NhbGZvcmQxGDAWBgNVBAoTD1NlY3RpZ28gTGltaXRlZDE3MDUGA1UE
AxMuU2VjdGlnbyBSU0EgRG9tYWluIFZhbGlkYXRpb24gU2VjdXJlIFNlcnZlciBD
QTAeFw0yMDA2MTYwMDAwMDBaFw0yMTA2MTYyMzU5NTlaMBsxGTAXBgNVBAMTEGdh
bWVicmFja2V0cy5hcHAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDK
Nd5A9r6YTMWdDxeUya4hG9383Bhe/LeZeGYSWP5OpvkbPYcXA5EOTCTNfuERLKC0
N6XwhHIV5ng8ZK8L2gG3yV26y7wPemwLMHkQfT1tCY9nymQbL8t74IkzWniCk+ak
+kXOw6hhmvVFhpfapHf3LCjKif4K2JDjQtkv9Hh9OevfNANE2iqiYqBkzr0f3ThF
iAzXtrZtxYaENsJ/ztdVb5MGZaQoBfy91zfwo28TsbEMZ1a1AGHZD0yPCsJ3+iPP
rNWqcdKCkbVPboHnnwXpPzGs67g/9cbi4zKG6VRme0BgFZRLlVQU2FXJjRGk/EjP
SWjjGVBsKQV8c8O4AHAZAgMBAAGjggKPMIICizAfBgNVHSMEGDAWgBSNjF7EVK2K
4Xfpm/mbBeG4AY1h4TAdBgNVHQ4EFgQUwE+Tgno3EmloHR85eJexGMQa2jowDgYD
VR0PAQH/BAQDAgWgMAwGA1UdEwEB/wQCMAAwHQYDVR0lBBYwFAYIKwYBBQUHAwEG
CCsGAQUFBwMCMEkGA1UdIARCMEAwNAYLKwYBBAGyMQECAgcwJTAjBggrBgEFBQcC
ARYXaHR0cHM6Ly9zZWN0aWdvLmNvbS9DUFMwCAYGZ4EMAQIBMIGEBggrBgEFBQcB
AQR4MHYwTwYIKwYBBQUHMAKGQ2h0dHA6Ly9jcnQuc2VjdGlnby5jb20vU2VjdGln
b1JTQURvbWFpblZhbGlkYXRpb25TZWN1cmVTZXJ2ZXJDQS5jcnQwIwYIKwYBBQUH
MAGGF2h0dHA6Ly9vY3NwLnNlY3RpZ28uY29tMDEGA1UdEQQqMCiCEGdhbWVicmFj
a2V0cy5hcHCCFHd3dy5nYW1lYnJhY2tldHMuYXBwMIIBBQYKKwYBBAHWeQIEAgSB
9gSB8wDxAHYAfT7y+I//iFVoJMLAyp5SiXkrxQ54CX8uapdomX4i8NcAAAFyu6h0
EwAABAMARzBFAiEA2j6U7jlj4xmR7dv0FG25bAG46NYF1EtOGNJifI6h9ZkCIAzf
zBp2Bvk93OEG3MaLccEvNG0/uXoAFWwQ6aNTzGCOAHcAlCC8Ho7VjWyIcx+CiyIs
DdHaTV5sT5Q9YdtOL1hNosIAAAFyu6h0OwAABAMASDBGAiEAkVrCq2R5nzq5REJa
F9rWXvXeQEuEtBxKkgcJt7tSq2ACIQCkkA6ise8qKfm28en5uoAyK6nk+/NvO8wS
whhS1QrQfTANBgkqhkiG9w0BAQsFAAOCAQEAbkQVNupsfHZ6v9t2iYki7gfPdsMy
nXo3ucNZcQuTeYEkb7pIz5+M4kHANw3zow+bHWa98KaRVUxaY/OG1U1Sq0BQbuhJ
rM9Ej/ya68kpufRaow0Q6miTCZEbMle80+gzPCmq30a5sm7ibuS3l3y1de23+ZSA
LSKleSxag/dyX+sqNYEIhhhuS2pYfSYs+L/Ctv3tMVxTQrSEqspt8l25kmOGscrz
77oX1Iae4ooWYYJ0ZXa7xbNzq+FK+4GUtuabnJZa9leoN/ILmmPScNz/X8ch9ATV
w00fexEv3WcsyH4jzEosAlMS8LIIr9n/jURQYU6cbLkV7MFDf4jYMn7KpQ==
-----END CERTIFICATE-----`;

var KEY = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDKNd5A9r6YTMWd
DxeUya4hG9383Bhe/LeZeGYSWP5OpvkbPYcXA5EOTCTNfuERLKC0N6XwhHIV5ng8
ZK8L2gG3yV26y7wPemwLMHkQfT1tCY9nymQbL8t74IkzWniCk+ak+kXOw6hhmvVF
hpfapHf3LCjKif4K2JDjQtkv9Hh9OevfNANE2iqiYqBkzr0f3ThFiAzXtrZtxYaE
NsJ/ztdVb5MGZaQoBfy91zfwo28TsbEMZ1a1AGHZD0yPCsJ3+iPPrNWqcdKCkbVP
boHnnwXpPzGs67g/9cbi4zKG6VRme0BgFZRLlVQU2FXJjRGk/EjPSWjjGVBsKQV8
c8O4AHAZAgMBAAECggEAPW8mSihs+YqBk1kNegfYHnj/9Z3MzbcL9NWOdU6SXMT/
89W6oDRWMrjRiZlducEMRhSOFse2fY7awsZ4JCqk0PidwG27ghxYjQG6FldmfSUl
a4wi49uef9FU/cQjztAuh7r90HbDRnw0vl3I7wV+6RqCfh50j0kCo/kgUSB+JtUS
3c4TpQbuSIcXxkpqXOvXYY/+87GIxDBVNWFtWQqCV1wm+XOVuXPK7F8w+0zbyDe8
dEwV/lD7tAZOf001u5Xeexl1fElDu10+26Oti8oeto9um5G+vpgHCKg+RA10p+ZA
oPHHUoazi7YTiVUWYkDJ1aSnyiCwv399Ls40B+favQKBgQDnnbGC4DfUO2haYc0a
G3WP3UxGV/evWdo03jJG/oO0+Mo82HwcjHGZ/L+Tlpitqs/OKWyM6MKMBmVX/6mW
jGN4EFFILsU+Sx71bccFcEbwzRBh8qE6oA2inM4o+Fyo7bZOEqyalcnI9cCA/6au
t2hEbrsRNZu7VDLsw2j+F7VUUwKBgQDff6mLCZxKZoxq5Oe75D8Tmv0qwC4o1OEH
LuZs/wAU7YO8hyJUpClezhOgQb5yZrCibtipV04zxT2m/BQHICQgB06wHGEyZ1d2
sx351LRgwNFPxc53S2Y2IvCZ2XwjoXaths/yB8xQXx0wgby7kvvqRX+Ggad1vssh
wfXD8MFcYwKBgQC5l1CAEG5r71aE5c1VWB9xsd/GlgJwTc1dg5ZB8PtUbe6PpuB8
d8UnoLFZ79hTgIWXKvZCSthpH07hnokji0bBFEItVtzSN5uNCfPp1bfiiE7STXsH
4OxMGt3PUoPdEO19zdTk4ZWZI+Km+zNy2KACBcB737rz9loAAe0FfbXc5QKBgAYU
nBE7TrQ7fACAf8l92TV4VwDtv5O+zux6GyzF90OafqYHayiwWqvIoYIPp9XG83FH
4L8ir+76o8XCP+09s53ndP2XmBFd/GQvVVZxsgKb3FX2RLq8I2i/pJoa76SshOUN
sOSdz7I0FEA4l2DnC9GA2IpZRqwOZ8pgU4ZkK26PAoGAdPU7wPMxwogC+KTlERXN
YdXQ5E1cqCjBIw2K+1UXRoC6zszzi+z0F4vIjrYHz7dBnuQuHATMyLy9X/LHSGH6
dOrk63IuIlGOP1Kl+LfevHeFmFGMoD6YpfhNtBEWd7KeGVdNrrzZbmJ7HzA3mcIK
UNjJdNC7ScpK1iKuCfU3N2g=
-----END PRIVATE KEY-----`;

var BUNDLE = `-----BEGIN CERTIFICATE-----
MIIGEzCCA/ugAwIBAgIQfVtRJrR2uhHbdBYLvFMNpzANBgkqhkiG9w0BAQwFADCB
iDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCk5ldyBKZXJzZXkxFDASBgNVBAcTC0pl
cnNleSBDaXR5MR4wHAYDVQQKExVUaGUgVVNFUlRSVVNUIE5ldHdvcmsxLjAsBgNV
BAMTJVVTRVJUcnVzdCBSU0EgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTgx
MTAyMDAwMDAwWhcNMzAxMjMxMjM1OTU5WjCBjzELMAkGA1UEBhMCR0IxGzAZBgNV
BAgTEkdyZWF0ZXIgTWFuY2hlc3RlcjEQMA4GA1UEBxMHU2FsZm9yZDEYMBYGA1UE
ChMPU2VjdGlnbyBMaW1pdGVkMTcwNQYDVQQDEy5TZWN0aWdvIFJTQSBEb21haW4g
VmFsaWRhdGlvbiBTZWN1cmUgU2VydmVyIENBMIIBIjANBgkqhkiG9w0BAQEFAAOC
AQ8AMIIBCgKCAQEA1nMz1tc8INAA0hdFuNY+B6I/x0HuMjDJsGz99J/LEpgPLT+N
TQEMgg8Xf2Iu6bhIefsWg06t1zIlk7cHv7lQP6lMw0Aq6Tn/2YHKHxYyQdqAJrkj
eocgHuP/IJo8lURvh3UGkEC0MpMWCRAIIz7S3YcPb11RFGoKacVPAXJpz9OTTG0E
oKMbgn6xmrntxZ7FN3ifmgg0+1YuWMQJDgZkW7w33PGfKGioVrCSo1yfu4iYCBsk
Haswha6vsC6eep3BwEIc4gLw6uBK0u+QDrTBQBbwb4VCSmT3pDCg/r8uoydajotY
uK3DGReEY+1vVv2Dy2A0xHS+5p3b4eTlygxfFQIDAQABo4IBbjCCAWowHwYDVR0j
BBgwFoAUU3m/WqorSs9UgOHYm8Cd8rIDZsswHQYDVR0OBBYEFI2MXsRUrYrhd+mb
+ZsF4bgBjWHhMA4GA1UdDwEB/wQEAwIBhjASBgNVHRMBAf8ECDAGAQH/AgEAMB0G
A1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAbBgNVHSAEFDASMAYGBFUdIAAw
CAYGZ4EMAQIBMFAGA1UdHwRJMEcwRaBDoEGGP2h0dHA6Ly9jcmwudXNlcnRydXN0
LmNvbS9VU0VSVHJ1c3RSU0FDZXJ0aWZpY2F0aW9uQXV0aG9yaXR5LmNybDB2Bggr
BgEFBQcBAQRqMGgwPwYIKwYBBQUHMAKGM2h0dHA6Ly9jcnQudXNlcnRydXN0LmNv
bS9VU0VSVHJ1c3RSU0FBZGRUcnVzdENBLmNydDAlBggrBgEFBQcwAYYZaHR0cDov
L29jc3AudXNlcnRydXN0LmNvbTANBgkqhkiG9w0BAQwFAAOCAgEAMr9hvQ5Iw0/H
ukdN+Jx4GQHcEx2Ab/zDcLRSmjEzmldS+zGea6TvVKqJjUAXaPgREHzSyrHxVYbH
7rM2kYb2OVG/Rr8PoLq0935JxCo2F57kaDl6r5ROVm+yezu/Coa9zcV3HAO4OLGi
H19+24rcRki2aArPsrW04jTkZ6k4Zgle0rj8nSg6F0AnwnJOKf0hPHzPE/uWLMUx
RP0T7dWbqWlod3zu4f+k+TY4CFM5ooQ0nBnzvg6s1SQ36yOoeNDT5++SR2RiOSLv
xvcRviKFxmZEJCaOEDKNyJOuB56DPi/Z+fVGjmO+wea03KbNIaiGCpXZLoUmGv38
sbZXQm2V0TP2ORQGgkE49Y9Y3IBbpNV9lXj9p5v//cWoaasm56ekBYdbqbe4oyAL
l6lFhd2zi+WJN44pDfwGF/Y4QA5C5BIG+3vzxhFoYt/jmPQT2BVPi7Fp2RBgvGQq
6jG35LWjOhSbJuMLe/0CjraZwTiXWTb2qHSihrZe68Zk6s+go/lunrotEbaGmAhY
LcmsJWTyXnW0OMGuf1pGg+pRyrbxmRE1a6Vqe8YAsOf4vmSyrcjC8azjUeqkk+B5
yOGBQMkKW+ESPMFgKuOXwIlCypTPRpgSabuY0MLTDXJLR27lk8QyKGOHQ+SwMj4K
00u/I5sUKUErmgQfky3xxzlIPK1aEn8=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFgTCCBGmgAwIBAgIQOXJEOvkit1HX02wQ3TE1lTANBgkqhkiG9w0BAQwFADB7
MQswCQYDVQQGEwJHQjEbMBkGA1UECAwSR3JlYXRlciBNYW5jaGVzdGVyMRAwDgYD
VQQHDAdTYWxmb3JkMRowGAYDVQQKDBFDb21vZG8gQ0EgTGltaXRlZDEhMB8GA1UE
AwwYQUFBIENlcnRpZmljYXRlIFNlcnZpY2VzMB4XDTE5MDMxMjAwMDAwMFoXDTI4
MTIzMTIzNTk1OVowgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpOZXcgSmVyc2V5
MRQwEgYDVQQHEwtKZXJzZXkgQ2l0eTEeMBwGA1UEChMVVGhlIFVTRVJUUlVTVCBO
ZXR3b3JrMS4wLAYDVQQDEyVVU0VSVHJ1c3QgUlNBIENlcnRpZmljYXRpb24gQXV0
aG9yaXR5MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAgBJlFzYOw9sI
s9CsVw127c0n00ytUINh4qogTQktZAnczomfzD2p7PbPwdzx07HWezcoEStH2jnG
vDoZtF+mvX2do2NCtnbyqTsrkfjib9DsFiCQCT7i6HTJGLSR1GJk23+jBvGIGGqQ
Ijy8/hPwhxR79uQfjtTkUcYRZ0YIUcuGFFQ/vDP+fmyc/xadGL1RjjWmp2bIcmfb
IWax1Jt4A8BQOujM8Ny8nkz+rwWWNR9XWrf/zvk9tyy29lTdyOcSOk2uTIq3XJq0
tyA9yn8iNK5+O2hmAUTnAU5GU5szYPeUvlM3kHND8zLDU+/bqv50TmnHa4xgk97E
xwzf4TKuzJM7UXiVZ4vuPVb+DNBpDxsP8yUmazNt925H+nND5X4OpWaxKXwyhGNV
icQNwZNUMBkTrNN9N6frXTpsNVzbQdcS2qlJC9/YgIoJk2KOtWbPJYjNhLixP6Q5
D9kCnusSTJV882sFqV4Wg8y4Z+LoE53MW4LTTLPtW//e5XOsIzstAL81VXQJSdhJ
WBp/kjbmUZIO8yZ9HE0XvMnsQybQv0FfQKlERPSZ51eHnlAfV1SoPv10Yy+xUGUJ
5lhCLkMaTLTwJUdZ+gQek9QmRkpQgbLevni3/GcV4clXhB4PY9bpYrrWX1Uu6lzG
KAgEJTm4Diup8kyXHAc/DVL17e8vgg8CAwEAAaOB8jCB7zAfBgNVHSMEGDAWgBSg
EQojPpbxB+zirynvgqV/0DCktDAdBgNVHQ4EFgQUU3m/WqorSs9UgOHYm8Cd8rID
ZsswDgYDVR0PAQH/BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wEQYDVR0gBAowCDAG
BgRVHSAAMEMGA1UdHwQ8MDowOKA2oDSGMmh0dHA6Ly9jcmwuY29tb2RvY2EuY29t
L0FBQUNlcnRpZmljYXRlU2VydmljZXMuY3JsMDQGCCsGAQUFBwEBBCgwJjAkBggr
BgEFBQcwAYYYaHR0cDovL29jc3AuY29tb2RvY2EuY29tMA0GCSqGSIb3DQEBDAUA
A4IBAQAYh1HcdCE9nIrgJ7cz0C7M7PDmy14R3iJvm3WOnnL+5Nb+qh+cli3vA0p+
rvSNb3I8QzvAP+u431yqqcau8vzY7qN7Q/aGNnwU4M309z/+3ri0ivCRlv79Q2R+
/czSAaF9ffgZGclCKxO/WIu6pKJmBHaIkU4MiRTOok3JMrO66BQavHHxW/BBC5gA
CiIDEOUMsfnNkjcZ7Tvx5Dq2+UUTJnWvu6rvP3t3O9LEApE9GQDTF1w52z97GA1F
zZOFli9d31kWTz9RvdVFGD/tSo7oBmF0Ixa1DVBzJ0RHfxBdiSprhTEUxOipakyA
vGp4z7h/jnZymQyd/teRCBaho1+V
-----END CERTIFICATE-----`;

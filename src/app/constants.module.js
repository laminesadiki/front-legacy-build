angular.module("app.constants", [])

.constant("OPLX_ENV", {
	"OPLX_AUTH_URL": "https://auth.dev.opalexe.fr/",
	"OPLX_REALM": "broker",
	"OPLX_REDIRECT_URI": "http://localhost:9090/",
	"OPLX_CLIENT_ID": "front-legacy-client",
	"OPLX_ON_LOAD": "login-required"
})

;
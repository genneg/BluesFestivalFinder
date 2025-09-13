$env:ANTHROPIC_BASE_URL = "https://api.z.ai/api/anthropic"
$env:ANTHROPIC_AUTH_TOKEN = "0e4b9e32ff9e4ef88c76b5a3b51e6650.7W2m4dl9GsqtGcEK"
Write-Host "Ora stai usando z.ai tramite Claude Code"
@{
  "env" = @{
    "ANTHROPIC_MODEL" = "glm-4.5"
  }
} | ConvertTo-Json | Set-Content -Path "$env:USERPROFILE\.claude\settings.json"
Write-Host "✅ Modello impostato su GLM-4.5"
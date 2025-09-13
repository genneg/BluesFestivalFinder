Remove-Item Env:ANTHROPIC_BASE_URL -ErrorAction SilentlyContinue
Remove-Item Env:ANTHROPIC_AUTH_TOKEN -ErrorAction SilentlyContinue
Write-Host "Ora stai usando Claude originale"
@{
  "env" = @{
    "ANTHROPIC_MODEL" = "claude-sonnet-4-20250514"
  }
} | ConvertTo-Json | Set-Content -Path "$env:USERPROFILE\.claude\settings.json"
Write-Host "✅ Modello impostato su Claude Sonnet"
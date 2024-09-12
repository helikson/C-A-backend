### Instale o [plugin do BiomeJS](https://marketplace.cursorapi.com/items?itemName=biomejs.biome)

#### Abra a Paleta de Comandos (Ctrl/⌘+⇧+P ou Ver → Paleta de Comandos)
#### Preferences: Open user Settings (JSON)

```json
"editor.defaultFormatter": "biomejs.biome",
"editor.formatOnSave": true,
"editor.formatOnPaste": true,
"editor.formatOnType": true,
"editor.detectIndentation": false,
"editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
},
```

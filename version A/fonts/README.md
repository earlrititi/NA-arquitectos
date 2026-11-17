# Fuentes base del proyecto

Archivos WOFF2 (subconjunto **latin**, suficiente para español) descargados de Google Fonts y guardados localmente para que el proyecto no dependa de una CDN.

| Archivo | Fuente | Estilo | Peso |
| --- | --- | --- | --- |
| `inter-latin-variable.woff2` | Inter v20 | normal | 400–700 (variable) |
| `eb-garamond-400-latin.woff2` | EB Garamond v33 | normal | 400 |
| `eb-garamond-400-italic-latin.woff2` | EB Garamond v33 | itálica | 400 |

## Uso

`fonts.css` (en la raíz del repo) define los `@font-face` apuntando a estos archivos.

Estado actual de la web: **no enlazado**. Los HTML siguen usando Arial/Georgia.

Para activar estas fuentes en el futuro:

1. Añadir `<link rel="stylesheet" href="fonts.css">` en el `<head>` de los HTML, antes de `styles.css`.
2. Ajustar `styles.css` para usar `font-family:'Inter','Arial',sans-serif` y `font-family:'EB Garamond',Georgia,serif`.

Fuentes originales: https://fonts.google.com/specimen/Inter y https://fonts.google.com/specimen/EB+Garamond

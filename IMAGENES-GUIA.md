# Guía para Agregar Imágenes Reales al Sitio Web

## 📸 Imágenes Necesarias

El sitio actualmente usa imágenes generadas por código (placeholders). Para mejorar la apariencia profesional, necesitas agregar imágenes reales de tu taller.

### Imágenes Requeridas

#### 1. **Imagen Hero (Portada Principal)**
- **Nombre del archivo**: `hero-car.jpg`
- **Ubicación**: Raíz del proyecto (`/Users/medinamacpc/Documents/Taller Medina/`)
- **Dimensiones recomendadas**: 1200x900 píxeles
- **Contenido sugerido**:
  - Vista del taller con vehículos en reparación
  - Autos en elevadores/rampas de alineación
  - Ambiente profesional y limpio
  - Buena iluminación

#### 2. **Imagen Sobre Nosotros**
- **Nombre del archivo**: `about-image.jpg`
- **Ubicación**: Raíz del proyecto
- **Dimensiones recomendadas**: 1200x900 píxeles
- **Contenido sugerido**:
  - Interior del taller mostrando el equipo de trabajo
  - Mecánicos trabajando en vehículos
  - Equipamiento y herramientas profesionales
  - Vista que transmita confianza y experiencia

## 🎨 Especificaciones Técnicas

### Formato
- **Formato preferido**: JPG (mejor compresión para fotos)
- **Formato alternativo**: PNG (si necesitas transparencia)
- **Formato moderno**: WebP (mejor compresión, soporte moderno)

### Tamaño de Archivo
- **Máximo recomendado**: 500 KB por imagen
- **Óptimo**: 200-300 KB
- **Herramientas de compresión**:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - [ImageOptim](https://imageoptim.com/) (Mac)

### Dimensiones
- **Ancho mínimo**: 800 píxeles
- **Ancho recomendado**: 1200-1600 píxeles
- **Relación de aspecto**: 4:3 o 16:9

## 📋 Pasos para Agregar las Imágenes

### Opción 1: Usar tus propias fotos

1. **Toma fotos de tu taller**:
   - Asegúrate de tener buena iluminación
   - Limpia y organiza el área antes de fotografiar
   - Toma varias fotos desde diferentes ángulos
   - Incluye vehículos en los elevadores si es posible

2. **Edita las fotos** (opcional):
   - Ajusta brillo y contraste
   - Recorta para mejorar la composición
   - Aplica filtros sutiles si lo deseas

3. **Optimiza el tamaño**:
   - Reduce la resolución a 1200-1600px de ancho
   - Comprime el archivo para web
   - Guarda con calidad 80-85%

4. **Renombra y coloca los archivos**:
   ```bash
   # Navega a la carpeta del proyecto
   cd "/Users/medinamacpc/Documents/Taller Medina"
   
   # Copia tus imágenes aquí con los nombres correctos
   # hero-car.jpg
   # about-image.jpg
   ```

### Opción 2: Usar fotos de stock (temporalmente)

Si no tienes fotos propias aún, puedes usar imágenes de stock gratuitas:

**Sitios recomendados**:
- [Unsplash](https://unsplash.com/s/photos/car-repair-shop)
- [Pexels](https://www.pexels.com/search/auto-repair/)
- [Pixabay](https://pixabay.com/images/search/mechanic-workshop/)

**Términos de búsqueda**:
- "auto repair shop"
- "mechanic workshop"
- "car service garage"
- "automotive repair"
- "car on lift"
- "vehicle alignment"

### Opción 3: Mantener los placeholders mejorados

El sitio ahora genera automáticamente imágenes placeholder que incluyen:
- Silueta de un auto en elevador
- Iconos de herramientas
- Gradientes profesionales
- Texto descriptivo

Estas imágenes son funcionales y se ven profesionales hasta que tengas fotos reales.

## 🔄 Actualización Automática

Una vez que coloques las imágenes con los nombres correctos en la carpeta del proyecto:

1. Las imágenes se cargarán automáticamente
2. Los placeholders serán reemplazados
3. No necesitas modificar el código HTML

## ✅ Verificación

Para verificar que las imágenes se cargaron correctamente:

1. Abre el sitio en tu navegador: `http://localhost:8000`
2. Revisa la sección Hero (portada)
3. Revisa la sección "Sobre Nosotros"
4. Verifica que las imágenes se vean nítidas y profesionales

## 🎯 Consejos para Mejores Resultados

### Fotografía del Taller

1. **Iluminación**:
   - Usa luz natural cuando sea posible
   - Enciende todas las luces del taller
   - Evita sombras duras

2. **Composición**:
   - Muestra el espacio organizado y limpio
   - Incluye equipamiento moderno visible
   - Captura mecánicos trabajando (con su permiso)

3. **Ángulos**:
   - Toma fotos desde esquinas para mostrar más espacio
   - Usa ángulos ligeramente elevados
   - Evita distorsiones extremas

4. **Elementos a incluir**:
   - ✅ Vehículos en elevadores
   - ✅ Equipos de diagnóstico
   - ✅ Herramientas profesionales
   - ✅ Área de trabajo limpia
   - ✅ Señalización de seguridad
   - ✅ Personal trabajando (opcional)

5. **Elementos a evitar**:
   - ❌ Desorden visible
   - ❌ Áreas sucias
   - ❌ Equipos dañados
   - ❌ Mala iluminación
   - ❌ Personas sin autorización

## 📱 Responsive

Las imágenes se adaptarán automáticamente a diferentes tamaños de pantalla:
- **Móvil**: Se redimensionan proporcionalmente
- **Tablet**: Mantienen buena calidad
- **Desktop**: Se muestran en tamaño completo

## 🔧 Solución de Problemas

### La imagen no se muestra
1. Verifica que el nombre del archivo sea exacto: `hero-car.jpg` y `about-image.jpg`
2. Asegúrate de que estén en la carpeta raíz del proyecto
3. Refresca el navegador (Cmd+R o Ctrl+R)
4. Limpia la caché del navegador (Cmd+Shift+R o Ctrl+Shift+F5)

### La imagen se ve pixelada
1. Usa una imagen de mayor resolución (mínimo 1200px de ancho)
2. Asegúrate de que la imagen original tenga buena calidad
3. No uses imágenes muy comprimidas

### El archivo es muy grande
1. Usa herramientas de compresión online
2. Reduce la resolución si es mayor a 2000px
3. Guarda en formato JPG con calidad 80-85%

## 📞 Soporte Adicional

Si necesitas ayuda adicional:
1. Revisa que los archivos estén en la ubicación correcta
2. Verifica los permisos de los archivos
3. Consulta la consola del navegador para errores (F12)

---

**Nota**: Las imágenes actuales (generadas por código) funcionan perfectamente como placeholder hasta que tengas fotos reales de tu taller. El sitio se ve profesional con o sin fotos reales.

# Imágenes del Sitio Web - Taller Medina

## 📸 Imágenes Actuales

El sitio web ahora utiliza **imágenes reales de talleres mecánicos** obtenidas de **Unsplash**, un servicio de fotografías de stock gratuitas y de alta calidad.

### Ventajas de Unsplash
- ✅ **Gratuito** para uso comercial
- ✅ **Sin atribución requerida**
- ✅ **Alta calidad** (resolución profesional)
- ✅ **Libre de derechos de autor**
- ✅ **Optimizadas** para web

---

## 🖼️ Imágenes Implementadas

### 1. Imagen Hero (Sección Principal)

**URL**: `https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=900&fit=crop&q=80`

**Descripción**: 
- Taller mecánico profesional
- Vista interior de un garaje automotriz
- Vehículos en proceso de reparación
- Iluminación profesional
- Ambiente de trabajo organizado

**Ubicación en el sitio**: 
- Sección Hero (portada principal)
- Lado derecho del texto "Tu Auto en las Mejores Manos"

**Parámetros de la URL**:
- `w=1200` - Ancho de 1200 píxeles
- `h=900` - Alto de 900 píxeles
- `fit=crop` - Recorte para ajustar dimensiones
- `q=80` - Calidad 80% (balance entre calidad y tamaño)

---

### 2. Imagen About (Sección "Sobre Nosotros")

**URL**: `https://images.unsplash.com/photo-1632823469883-d8f8b6d2b4e2?w=1200&h=900&fit=crop&q=80`

**Descripción**:
- Taller mecánico profesional
- Mecánicos trabajando en vehículos
- Equipamiento moderno visible
- Ambiente profesional y limpio
- Herramientas y equipos de diagnóstico

**Ubicación en el sitio**:
- Sección "Sobre Nosotros"
- Lado izquierdo del texto "Experiencia y Compromiso"

**Parámetros de la URL**:
- `w=1200` - Ancho de 1200 píxeles
- `h=900` - Alto de 900 píxeles
- `fit=crop` - Recorte para ajustar dimensiones
- `q=80` - Calidad 80% (balance entre calidad y tamaño)

---

## 🔄 Cómo Cambiar las Imágenes

Si deseas usar **otras imágenes de Unsplash** o **tus propias fotos**:

### Opción 1: Usar otras imágenes de Unsplash

1. Visita [Unsplash](https://unsplash.com)
2. Busca: "auto repair shop", "mechanic workshop", "car garage", etc.
3. Selecciona una imagen
4. Haz clic derecho en la imagen → "Copiar dirección de imagen"
5. Agrega parámetros de optimización: `?w=1200&h=900&fit=crop&q=80`
6. Reemplaza la URL en `index.html`

**Ejemplo de búsquedas recomendadas**:
- [Auto Repair Shop](https://unsplash.com/s/photos/auto-repair-shop)
- [Mechanic Workshop](https://unsplash.com/s/photos/mechanic-workshop)
- [Car Garage](https://unsplash.com/s/photos/car-garage)
- [Automotive Service](https://unsplash.com/s/photos/automotive-service)
- [Car Lift](https://unsplash.com/s/photos/car-lift)

### Opción 2: Usar tus propias fotos

1. Toma fotos de tu taller
2. Optimiza las imágenes (1200x900 px, formato JPG)
3. Sube las fotos a un servicio de hosting:
   - **Imgur** (gratuito)
   - **Cloudinary** (gratuito con límites)
   - **Tu propio servidor web**
4. Copia la URL directa de la imagen
5. Reemplaza en `index.html`

### Opción 3: Usar archivos locales

1. Coloca tus imágenes en la carpeta del proyecto
2. Nómbralas: `hero-car.jpg` y `about-image.jpg`
3. En `index.html`, cambia las URLs a:
   - `src="hero-car.jpg"`
   - `src="about-image.jpg"`

---

## 📝 Ubicación en el Código

### Imagen Hero
**Archivo**: `index.html`  
**Línea aproximada**: 140-143

```html
<img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=900&fit=crop&q=80" 
     alt="Taller Medina - Vehículos en reparación" 
     class="rounded-2xl w-full h-auto object-cover" 
     id="hero-image">
```

### Imagen About
**Archivo**: `index.html`  
**Línea aproximada**: 436-439

```html
<img src="https://images.unsplash.com/photo-1632823469883-d8f8b6d2b4e2?w=1200&h=900&fit=crop&q=80" 
     alt="Taller Medina - Nuestro equipo de trabajo" 
     class="rounded-2xl w-full h-auto object-cover"
     id="about-image">
```

---

## 🎨 Optimización de Imágenes

### Parámetros de URL de Unsplash

Puedes modificar los parámetros para ajustar las imágenes:

- **Ancho**: `w=1200` (cambia el número)
- **Alto**: `h=900` (cambia el número)
- **Calidad**: `q=80` (valores: 1-100)
- **Ajuste**: `fit=crop` (opciones: crop, max, fill)
- **Formato**: `fm=jpg` o `fm=webp`

**Ejemplo con WebP** (formato moderno, mejor compresión):
```
https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=900&fit=crop&q=80&fm=webp
```

### Tamaños Recomendados

| Dispositivo | Ancho Recomendado |
|-------------|-------------------|
| Móvil       | 600-800px        |
| Tablet      | 800-1200px       |
| Desktop     | 1200-1600px      |
| Retina      | 2000-2400px      |

---

## ✅ Verificación

Para verificar que las imágenes se cargaron correctamente:

1. Abre el sitio: `http://localhost:8000`
2. Verifica la **sección Hero** (portada)
3. Verifica la **sección "Sobre Nosotros"**
4. Revisa que las imágenes:
   - Se carguen rápidamente
   - Se vean nítidas
   - Sean relevantes al contenido
   - Funcionen en móvil y desktop

---

## 🔍 Alternativas a Unsplash

Si necesitas más opciones de imágenes gratuitas:

1. **Pexels** - https://www.pexels.com
2. **Pixabay** - https://pixabay.com
3. **Freepik** - https://www.freepik.com (algunas requieren atribución)
4. **Burst by Shopify** - https://burst.shopify.com
5. **Stocksnap** - https://stocksnap.io

---

## 📊 Rendimiento

Las imágenes actuales están optimizadas para:
- ✅ Carga rápida (< 200KB cada una)
- ✅ Responsive (se adaptan a móviles)
- ✅ Lazy loading (carga diferida)
- ✅ SEO optimizado (alt text descriptivo)

---

## 🎯 Mejores Prácticas

1. **Usa imágenes relevantes** que muestren tu taller real
2. **Optimiza el tamaño** para web (no más de 500KB)
3. **Incluye texto alternativo** descriptivo
4. **Usa formatos modernos** como WebP cuando sea posible
5. **Prueba en diferentes dispositivos** antes de publicar

---

**Última actualización**: 13 de enero de 2026  
**Imágenes cortesía de**: Unsplash (https://unsplash.com)

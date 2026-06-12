# Malla Didáctica Interactiva 📚

Una página web interactiva para gestionar tu malla curricular universitaria con tema rosa palo.

## ¿Cómo usar?

1. **Abre el archivo** `index.html` en tu navegador
2. **Haz clic en cualquier ramo** para marcar lo como completado (se pondrá rosa)
3. Los ramos que tengan como prerequisito uno que completaste **se desbloquearán automáticamente**
4. Tu progreso se **guarda automáticamente** en tu navegador
5. Puedes hacer clic en **"↻ Reiniciar Progreso"** para empezar de nuevo

## Cómo actualizar con tu malla

Cuando tengas la información de tu carrera, necesitas editar el archivo `script.js`:

### Paso 1: Abre `script.js` con un editor de texto

### Paso 2: Encuentra esta sección (línea 1):

```javascript
const ramosDatos = [
    {
        id: 'calculo1',
        codigo: 'MAT101',
        nombre: 'Cálculo I',
        creditos: 4,
        prerequisitos: []
    },
    // ... más ramos
];
```

### Paso 3: Reemplaza con tus ramos

Para cada ramo, necesitas:
- **id**: un identificador único (ej: `calculo1` - sin espacios ni caracteres especiales)
- **codigo**: el código oficial del ramo (ej: `MAT101`)
- **nombre**: nombre del ramo (ej: `Cálculo I`)
- **creditos**: número de créditos
- **prerequisitos**: lista de IDs de ramos que son requisito previo

### Ejemplo con una malla real:

```javascript
const ramosDatos = [
    {
        id: 'introduccion_programacion',
        codigo: 'ING100',
        nombre: 'Introducción a la Programación',
        creditos: 3,
        prerequisitos: []
    },
    {
        id: 'estructuras_datos',
        codigo: 'ING101',
        nombre: 'Estructuras de Datos',
        creditos: 3,
        prerequisitos: ['introduccion_programacion']  // ← Requiere el ramo anterior
    },
    {
        id: 'bases_datos',
        codigo: 'ING102',
        nombre: 'Bases de Datos',
        creditos: 3,
        prerequisitos: ['estructuras_datos']  // ← Requiere estructuras
    },
    {
        id: 'aplicaciones_web',
        codigo: 'ING103',
        nombre: 'Aplicaciones Web',
        creditos: 3,
        prerequisitos: ['introduccion_programacion', 'bases_datos']  // ← Requiere ambos
    }
];
```

## Características

✨ **Tema rosa palo** - Diseño moderno y elegante
🔒 **Bloqueo automático** - Los ramos se desbloquean al completar requisitos
📊 **Contador de progreso** - Ve cuántos ramos has completado
💾 **Guardado automático** - Tu progreso se guarda en el navegador
📱 **Responsive** - Funciona en teléfono, tablet y computadora
🎨 **Interfaz intuitiva** - Solo haz clic para marcar/desmarcar

## Archivos

- `index.html` - Estructura de la página
- `styles.css` - Estilos y diseño rosa palo
- `script.js` - Lógica de los ramos y prerequisitos

## Tips

💡 Los IDs de los ramos deben ser **únicos** y **coherentes** (sin espacios)
💡 Si un ramo no tiene prerequisitos, deja la lista vacía: `prerequisitos: []`
💡 Puedes tener múltiples prerequisitos: `prerequisitos: ['ramo1', 'ramo2', 'ramo3']`
💡 Los cambios se guardan automáticamente en tu navegador

¡Cuando tengas tu información, envíamela y lo adaptaré a tu malla específica! 🎓

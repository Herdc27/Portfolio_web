# TODO - Implementación de Funcionalidades

## Funcionalidad 1: Modo Dark/Light

### Paso 1: Crear estructura para manejo del tema
- [x] Crear directorio `src/context/`
- [x] Crear `src/context/ThemeContext.jsx` con context para tema global
- [x] Crear `src/hooks/useTheme.js` con hook personalizado

### Paso 2: Modificar App.jsx
- [x] Importar ThemeContext y useTheme
- [x] Envolver la aplicación con ThemeProvider
- [x] Agregar estado del tema y funciones de toggle

### Paso 3: Actualizar index.css
- [x] Agregar variables CSS para tema claro
- [x] Agregar variables CSS para tema oscuro
- [x] Implementar transición suave entre temas

### Paso 4: Modificar Header.jsx
- [x] Importar useTheme hook
- [x] Agregar funcionalidad onClick al botón de toggle
- [x] Cambiar ícono según el tema actual (sol/luna)

### Paso 5: Actualizar Header.css
- [x] Agregar estilos para botón activo
- [x] Mejorar animación del toggle

## Funcionalidad 2: Icono de WhatsApp

### Paso 6: Modificar Navfrist.jsx
- [x] Reemplazar ícono de email por ícono de WhatsApp
- [x] Agregar link de WhatsApp funcional
- [x] Mantener texto "Contáctame"

### Paso 7: Verificar estilos
- [x] Revisar que el nuevo ícono se vea bien
- [x] Ajustar CSS si es necesario

## Testing

### Paso 8: Probar funcionalidades
- [x] Verificar que el toggle dark/light funciona
- [x] Confirmar que el tema se guarda en localStorage
- [x] Probar que el link de WhatsApp funciona correctamente
- [ ] Verificar responsividad en diferentes tamaños de pantalla

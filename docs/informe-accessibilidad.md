# Informe de Accesibilidad - Taura Birra

## Asuntos Actuales (priorizados)

### Críticos (Nivel A de WCAG)

1.  **Texto Oculto Sin Marcado Adecuado**
    * **Ubicación:** `.card .card-text`
    * **Problema:** `color: rgba(0,0,0,0.0)` invisible hasta pasar el cursor (hover).
    * **Impacto:** Los lectores de pantalla leen texto invisible.
    * **Solución:** Usar `opacity: 0` + `aria-hidden="true"` inicialmente.

2.  **Sin Indicadores de Foco**
    * **Ubicación:** Todos los elementos interactivos.
    * **Problema:** No hay estilos `:focus` visibles.
    * **Impacto:** Los usuarios de teclado no pueden rastrear su posición.
    * **Solución:** Añadir estilos de foco globales.

3.  **Faltan Etiquetas de Formulario**
    * **Ubicación:** Formulario de contacto.
    * **Problema:** Las etiquetas no están asociadas programáticamente.
    * **Impacto:** Los lectores de pantalla no pueden identificar los campos.
    * **Solución:** Asegurar que `<label for="id">` coincida con `<input id="id">`.

4.  **Falta Contexto en Texto Alternativo (Alt Text)**
    * **Ubicación:** Imágenes de las tarjetas de cerveza.
    * **Problema:** Texto alternativo demasiado genérico ("Cerveza IPA").
    * **Solución:** Añadir contexto descriptivo ("Taura Birra IPA artesanal con notas cítricas").

### Prioridad Alta (Nivel AA de WCAG)

5.  **Problemas de Contraste de Color**
    * **Ubicación:** `.subtitulo` sobre el fondo del encabezado.
    * **Problema:** Relación de contraste 3.2:1 (necesita 4.5:1).
    * **Solución:** Añadir `text-shadow` (sombra de texto) o oscurecer el fondo.

6.  **Falta Etiqueta en Conmutador de Navegación**
    * **Ubicación:** `.navbar-toggler`
    * **Problema:** Falta `aria-label` para lectores de pantalla.
    * **Solución:** Añadir `aria-label="Menú de navegación"`.

7.  **Faltan Encabezados en la Tabla**
    * **Ubicación:** `.tablap`
    * **Problema:** No hay `<th scope="col">` para los encabezados.
    * **Solución:** Convertir la primera fila en un `<thead>` adecuado.

### Prioridad Media (Mejores Prácticas)

8.  **SVGs Decorativos No Ocultos**
    * **Ubicación:** Gráficos de cebada en `.separador`.
    * **Problema:** Los lectores de pantalla anuncian el SVG.
    * **Solución:** Añadir `aria-hidden="true"` + `role="presentation"`.

9.  **Idioma No Declarado**
    * **Ubicación:** Etiqueta `<html>`.
    * **Problema:** Falta `lang="es"`.
    * **Solución:** Añadir el atributo de idioma.

10. **Falta Enlace "Saltar al Contenido"**
    * **Ubicación:** Parte superior de la página.
    * **Problema:** Los usuarios de teclado deben tabular (navegar con 'Tab') por toda la navegación.
    * **Solución:** Añadir un enlace para saltar contenido antes de la barra de navegación.

## Análisis de Contraste

| Elemento | Relación Actual | Requerido | Pasa/Falla |
| :--- | :--- | :--- | :--- |
| Texto del cuerpo sobre #FFE4B5 | 8.2:1 | 4.5:1 | ✅ PASA |
| Enlaces de nav. sobre #3f2b1d | 10.5:1 | 4.5:1 | ✅ PASA |
| Subtítulo del encabezado | 3.2:1 | 4.5:1 | ❌ FALLA |
| Texto del pie de página | 9.1:1 | 4.5:1 | ✅ PASA |
| Texto del botón | 7.8:1 | 4.5:1 | ✅ PASA |

## Resultados de Pruebas de Navegación por Teclado

| Acción | ¿Funciona? | Notas |
| :--- | :--- | :--- |
| Tabular por la navegación | ✅ | Pero sin indicador de foco |
| Abrir menú móvil | ❌ | No se puede activar con la tecla Enter |
| Enviar formulario | ✅ | |
| Activar *hover* de tarjeta | ❌ | Necesita `:focus-within` |
| Cerrar puerta de edad (*age gate*) | ✅ | |

## Soluciones Recomendadas para la Migración a React

```jsx
// 1. Gestión del foco
useEffect(() => {
  if (modalOpen) {
    modalRef.current?.focus();
  }
}, [modalOpen]);

// 2. Manejadores de teclado
<button 
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>

// 3. HTML Semántico
<nav aria-label="Principal">
  <ul role="list">
    <li><a href="#inicio">Inicio</a></li>
  </ul>
</nav>

// 4. Regiones activas (live regions) para contenido dinámico
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

## Puntuación Lighthouse (Actuales)

* Accessibility: 68/100
* Target after Stage 2: 95+/100
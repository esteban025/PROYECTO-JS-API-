# Rick and Morty Explorer 🛸

Una aplicación web interactiva para explorar el universo de Rick and Morty, consumiendo datos de la [Rick and Morty API](https://rickandmortyapi.com/).

## 📋 Descripción

Este proyecto permite a los usuarios navegar y descubrir información detallada sobre personajes, episodios y localizaciones de la serie Rick and Morty. La aplicación ofrece una interfaz intuitiva con funcionalidades de búsqueda, filtrado y gestión de favoritos.

## ✨ Características

### 1. Búsqueda y Filtrado de Personajes
- [✔] Listado completo de personajes con información principal (nombre, imagen, estado, especie)
- [✔] Buscador en tiempo real para filtrar personajes por nombre
- [✔] Filtros avanzados por:
  - Estado: Alive, Dead, Unknown
  - Especie: Human, Alien, etc.

### 2. Detalle de Personaje
- [✔] Vista detallada al hacer clic en cualquier personaje
- [✔] Información completa incluyendo:
  - Localización actual
  - Origen
  - Lista de episodios en los que aparece
  - Datos adicionales relevantes

### 3. Visualización de Episodios (Opcional)
- Sección dedicada para explorar episodios
- Información de cada episodio:
  - Nombre y código del episodio
  - Fecha de emisión
  - Lista de personajes participantes
- Navegación directa desde episodios a detalles de personajes

### 4. Paginación o Carga Dinámica
- [✔] Sistema de paginación para navegar entre resultados
- [ ] Opción de botón "Cargar más" para experiencia de scroll infinito
- [✔] Manejo eficiente de los datos paginados de la API

### 5. Favoritos (Opcional con LocalStorage)
- [✔] Funcionalidad para marcar personajes/episodios como favoritos
- [✔] Persistencia de favoritos usando localStorage
- [✔] Sección independiente para visualizar todos los favoritos guardados
- [ ] Sincronización automática entre sesiones

### 6. Manejo de Errores y Estados
- Indicadores visuales de carga (spinner o mensajes)
- Mensajes informativos para diferentes estados:
  - Carga en progreso
  - Errores de conexión
  - [✔] Sin resultados encontrados
  - Endpoints incorrectos

### 7. Diseño y Responsividad
- [✔] Interfaz adaptativa para todos los dispositivos:
  - Móviles (smartphones)
  - Tabletas
  - Desktop
- [✔] Diseño moderno y temático de Rick and Morty
- [✔] Experiencia de usuario optimizada

## 🚀 API Utilizada

```
Base URL: https://rickandmortyapi.com/api
```

### Endpoints principales:
- `/character` - Obtener personajes
- `/episode` - Obtener episodios
- `/location` - Obtener localizaciones

## 🛠️ Tecnologías Sugeridas

- **Frontend**: Astro
- **Estilos**: CSS personalizado, Tailwind CSS
- **Gestión de Estado**: Context API, Redux, o localStorage
- **HTTP Client**: Fetch API o Axios

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd rick-morty-explorer

# Instalar dependencias (si aplica)
npm install

# Iniciar el proyecto
npm start
```

## 🎯 Uso

1. Abre la aplicación en tu navegador
2. Explora el listado inicial de personajes
3. Utiliza el buscador para encontrar personajes específicos
4. Aplica filtros por estado o especie según prefieras
5. Haz clic en cualquier personaje para ver su información detallada
6. Navega a la sección de episodios para explorar temporadas
7. Marca tus personajes favoritos para acceso rápido


## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## 👨‍💻 Autor

EstebanDev

## 🙏 Agradecimientos

- [Rick and Morty API](https://rickandmortyapi.com/) por proporcionar los datos
- Comunidad de desarrolladores por el apoyo continuo

---

**¡Wubba Lubba Dub Dub!** 🚀✨
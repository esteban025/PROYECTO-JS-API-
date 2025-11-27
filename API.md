## 📡 **Rutas y Endpoints de la Rick and Morty API**

### **Base URL**
```
https://rickandmortyapi.com/api
```

---

## **1. CHARACTERS (Personajes)** 👨‍🔬

### Rutas principales:
- **GET** `/character` - Obtener todos los personajes (paginado)
- **GET** `/character/{id}` - Obtener un personaje específico por ID
- **GET** `/character/[1,2,3]` o `/character/1,2,3` - Obtener múltiples personajes

### Parámetros de filtrado disponibles:
- `name` - Filtrar por nombre
- `status` - Filtrar por estado: `alive`, `dead`, `unknown`
- `species` - Filtrar por especie (Human, Alien, etc.)
- `type` - Filtrar por tipo/subespecie
- `gender` - Filtrar por género: `female`, `male`, `genderless`, `unknown`
- `page` - Número de página

### Ejemplos de uso:
```
GET /character
GET /character/1
GET /character/1,2,3
GET /character?name=rick&status=alive
GET /character?species=human&gender=male
GET /character?page=2
```

### Estructura de respuesta (Character Schema):
```json
{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": ["https://rickandmortyapi.com/api/episode/1"],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
}
```

**Total:** 826 personajes

---

## **2. LOCATIONS (Localizaciones)** 🌍

### Rutas principales:
- **GET** `/location` - Obtener todas las localizaciones (paginado)
- **GET** `/location/{id}` - Obtener una localización específica
- **GET** `/location/[1,2,3]` o `/location/1,2,3` - Obtener múltiples localizaciones

### Parámetros de filtrado disponibles:
- `name` - Filtrar por nombre
- `type` - Filtrar por tipo (Planet, Space station, etc.)
- `dimension` - Filtrar por dimensión
- `page` - Número de página

### Ejemplos de uso:
```
GET /location
GET /location/3
GET /location/1,2,3
GET /location?name=earth
GET /location?type=planet
GET /location?dimension=C-137
```

### Estructura de respuesta (Location Schema):
```json
{
  "id": 1,
  "name": "Earth",
  "type": "Planet",
  "dimension": "Dimension C-137",
  "residents": [
    "https://rickandmortyapi.com/api/character/1"
  ],
  "url": "https://rickandmortyapi.com/api/location/1",
  "created": "2017-11-10T12:42:04.162Z"
}
```

**Total:** 126 localizaciones

---

## **3. EPISODES (Episodios)** 📺

### Rutas principales:
- **GET** `/episode` - Obtener todos los episodios (paginado)
- **GET** `/episode/{id}` - Obtener un episodio específico
- **GET** `/episode/[1,2,3]` o `/episode/1,2,3` - Obtener múltiples episodios

### Parámetros de filtrado disponibles:
- `name` - Filtrar por nombre del episodio
- `episode` - Filtrar por código de episodio (S01E01, S02E05, etc.)
- `page` - Número de página

### Ejemplos de uso:
```
GET /episode
GET /episode/28
GET /episode/1,2,3
GET /episode?name=Pilot
GET /episode?episode=S01E01
```

### Estructura de respuesta (Episode Schema):
```json
{
  "id": 1,
  "name": "Pilot",
  "air_date": "December 2, 2013",
  "episode": "S01E01",
  "characters": [
    "https://rickandmortyapi.com/api/character/1"
  ],
  "url": "https://rickandmortyapi.com/api/episode/1",
  "created": "2017-11-10T12:56:33.798Z"
}
```

**Total:** 51 episodios

---

## **🔄 PAGINACIÓN**

Todas las respuestas incluyen un objeto `info` con información de paginación:

```json
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [...]
}
```

- **count**: Total de elementos
- **pages**: Total de páginas
- **next**: URL de la siguiente página (null si no existe)
- **prev**: URL de la página anterior (null si no existe)
- **Límite por página**: 20 documentos

---

## **💡 Tips de Uso**

1. **Combinar filtros**: Usa `&` para encadenar múltiples filtros
   ```
   /character?name=rick&status=alive&species=human
   ```

2. **Sin autenticación**: Todas las peticiones son **GET** y no requieren API key

3. **HTTPS**: Todas las peticiones van sobre **HTTPS**

4. **Formato JSON**: Todas las respuestas son en **JSON**

5. **GraphQL disponible**: También puedes usar GraphQL en:
   ```
   https://rickandmortyapi.com/graphql
   ```

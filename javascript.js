 // JAVASCRIPT: LÓGICA

        // 1. Base de datos simulada
        // Corregí "facebooke" y agregué más variedad
        const words = [
            "facebook", "facetime", "factory", "google", "github", 
            "gmail", "amazon", "apple", "adobe", "figma", 
            "airbnb", "angular", "android", "bootstrap"
        ];

        // 2. Seleccionar elementos del DOM
        const searchInput = document.getElementById('search');
        const list = document.getElementById('list');

        // 3. Escuchar el evento de escritura
        searchInput.addEventListener("input", (e) => {
            // Limpiamos espacios al inicio/final y pasamos a minúsculas
            const inputValue = e.target.value.trim().toLowerCase();
            
            // Limpiamos la lista anterior siempre
            list.innerHTML = '';

            // Si el input está vacío, ocultamos la lista y terminamos la función
            if (inputValue === "") {
                list.style.display = 'none';
                return; // 'return' detiene la ejecución aquí
            }

            // 4. Filtrar
            const wordFilter = words.filter(word => 
                word.toLowerCase().includes(inputValue)
            );

            // 5. Lógica de visualización
            if (wordFilter.length > 0) {
                // Si hay resultados, mostramos la lista
                list.style.display = 'block';

                wordFilter.forEach(word => {
                    const item = document.createElement("li");
                    item.textContent = word;

                    // Evento Click: Rellenar el input
                    item.addEventListener("click", () => {
                        searchInput.value = word;
                        list.style.display = 'none'; // Ocultamos tras seleccionar
                    });

                    list.appendChild(item);
                });
            } else {
                // Mejora UX: Mostrar mensaje si no hay coincidencias
                list.style.display = 'block';
                const noResultItem = document.createElement("li");
                noResultItem.className = 'no-results';
                noResultItem.textContent = "No se encontraron resultados";
                list.appendChild(noResultItem);
            }
        });

        // Mejora UX extra: Cerrar la lista si hacen click fuera del buscador
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !list.contains(e.target)) {
                list.style.display = 'none';
            }
        });
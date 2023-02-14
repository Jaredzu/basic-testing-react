# basic-testing-react _with jest_

### Algunas Funciones

- render(Component): Renderiza el componente en una pantalla de prueba.
- screen: Objeto se que se refiere a la pantalla de prueba.
- cleanup(): Reinicia el DOM de la pantalla de prueba.

- afterEach(callback function): Ejecuta el callback después de correr cada prueba.
- beforeEach(callback function): Ejecuta el callback antes de correr cada prueba.

- describe(name, callback_function): Define una grupo que contiene varias pruebas unitarias. callbackFunction contiene las pruebas.
- test(nameOfTest, callbackFunction): Define una prueba a ser ejecutada.
- fireEvent: Simula un evento especificado.

### Pruebas con el botón

1. El elemento se renderiza en el dom
2. El elemento muestra el texto que se pasa como prop

### Pruebas con el texto

1. El elemento se renderiza en el dom
2. El contenido del elemento cuando _toggle_ es _true_ 
3. El contenido del elemento cuando _toggle_ es _false_ 

### Pruebas con App
1. Todos los componentes están renderizados
2. El valor del texto
3. La capacidad de _toggle_ del botón


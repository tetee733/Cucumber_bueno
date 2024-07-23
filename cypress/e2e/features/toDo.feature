Feature: toDoPage

    Scenario: Agregar dos tareas con el mismo nombre
        Given Con una tarea creada
        When Creo otra tarea con el mismo nombre que la anterior
        Then Deben aparecer las dos tareas con el mismo nombre    
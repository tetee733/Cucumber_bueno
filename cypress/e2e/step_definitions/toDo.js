import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import { gestiontarea } from "../../PageObject/GestionTarea";

Given("Con una tarea creada", () => {
    gestiontarea.navigateTodo();
    gestiontarea.addTask("Tarea 1{enter}");
});
When("Creo otra tarea con el mismo nombre que la anterior", () => {
    gestiontarea.addTask("Tarea 1{enter}");
});
Then("Deben aparecer las dos tareas con el mismo nombre", () => {
    gestiontarea.comprobarTareas();
})
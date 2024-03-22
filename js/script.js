class ToDoList {
    constructor(inputTask, Button, TaskList) {
        this.inputTask = inputTask;
        this.Button = Button;
        this.TaskList = TaskList;
        this.Button.addEventListener("click", () => this.Adicionar());
        this.inputTask.addEventListener("keypress", (e) => this.TeclaPressionada(e));
    }

    Adicionar() {
        let InputTask = this.inputTask.value.trim();
        if (InputTask !== '') {
            let CriarTexto = document.createElement("li");
            CriarTexto.innerHTML = `
                ${InputTask}
                <button class="DelBtn">X</button>
            `;
            this.TaskList.appendChild(CriarTexto);
            this.inputTask.value = ''; // Atribuir valor vazio corretamente
            const DelBtn = CriarTexto.querySelector(".DelBtn"); // Encontrar o botão dentro do elemento criado
            DelBtn.addEventListener("click", () => this.Deletar(CriarTexto)); // Passar CriarTexto como argumento para Deletar
        }
    }

    TeclaPressionada(event) {
        if (event.key === "Enter") {
            this.Adicionar();
        }
    }

    Deletar(Item) {
        Item.remove();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const InputTask = document.querySelector("#InputTask");
    const Button = document.querySelector("#Button");
    const TaskList = document.querySelector("#TaskList");

    const ToDOList = new ToDoList(InputTask, Button, TaskList);
});

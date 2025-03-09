// console.log (typeof 2);

const todo = {
    list: {
        "Встать с кровати": "Готово",
        "Пойти гулять": 'В процессе',
        "Прийти домой": 'Будет сделано'
    },
    addTodo(action, status) {
        if (action.length >= 50) {
            console.log(`Слишком большое кол-во символов в: ${action}`);
            return;
        }
        if (Object.hasOwn (this.list, action)) {
            console.log(`${action} уже существует`);
            return;
        }
        this.list[action] = status;
        console.log(`Было добавлено действие: ${action}`);
    },
    remakeTodo(action, status) {
        if (this.list.hasOwnProperty(action)) {
            this.list[action] = status;
            console.log(`Статус ${action} измененён на ${status}`);
        } else {
            console.log("Такого действия не существует");
        }
    },
    removeTodo(action) {
        if (Object.hasOwn (this.list, action)) {
            delete this.list[action];
            console.log(`Дело ${action} удалено`);
        } else {
            console.log(`действия ${action} не существует`);
        }
    },
    showTodo() {
        for (const[action, status] of Object.entries(this.list)) {
            console.log(`${action}: (${status})`);
        }
    }
};



const list = [
    {task: 'Изучение js', status: 'Выполняется', priority: 'Высокий'},
    {task: 'Изучение html', status: 'Средне изучено', priority: 'Обычный'},
    {task: 'Изучение css', status: 'Мало изучено', priority: 'Обычный'}
];

function addList(nameTask = "Новая задача", nameStatus = "Неизвестно", namePriority = 'Неизвестно') {
    if (nameTask.length >= 50 || nameStatus.length >= 50 || namePriority.length >= 50) {
        console.log("❌ Один из параметров слишком длинный (макс. 50 символов)");
        return; //Проверка на кол-ва символов
    } if (list.some(item => item.task === nameTask)) {
    console.log(`⚠️ Задача '${nameTask}' уже существует в списке`);
    return; //Проверка на наличие task
    }
    list.push({task: nameTask, status: nameStatus, priority: namePriority})
    console.log(`✅ Была добавлена задача: "${nameTask}", со статусом "${nameStatus}" и приоритет "${namePriority}"`);
}; // Добавление объекта массвива

function deleteList(nameTask) {
    const index = list.findIndex(item => item.task === nameTask);
    if (index !== -1) {
        list.splice(index, 1);
        console.log(`🗑️ Задача "${nameTask}" была удалена`);
        return;
    } else {
        console.log(`❌ Задача "${nameTask}" не найдена`);
    }
}; //удаление по названию задачи

function deleteIndexList(index) {
    if (index >= 0 && index < list.length) {
        console.log(`🗑️ Задача "${list[index].task}" была удалена`);
        list.splice(index, 1);
        return;
    } else {
        console.log(`❌ Неверный индекс. Укажите индекс от 0 до ${list.length - 1}`)
    }
}; //Удаление по индексу (2 способ)

function remakeStatus (nameTask, newStatus) {
    const index = list.findIndex(item => item.task === nameTask);
    if (index !== -1) {
        console.log(`🔄 Изменение статуса "${list[index].status}" на "${newStatus}"`);
        list[index].status = newStatus;
        return;
    } else {
        console.log(`❌ Не существует задачи "${nameTask}"`);
    }
}; //Изменение статуса

function tasksFrontend() {
    const tasks = list.map(item => item.task);
    console.table(tasks);
}; //Выведение задач массива и статус

console.table(list);


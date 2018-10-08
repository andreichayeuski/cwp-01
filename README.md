# lab 01 on subject CWP Знакомство с Node.js ЛР01
function task00() {
Устанавливаем Current версию Node.js
В терминале выполняем команды node --version и npm --version. Должны получить номера версий node.js и npm, соответственно.
}
function task01() {
Устанавливаем любую IDE или редактор для работы с Node.js: WebStorm (предпочтительно), Atom, VS Code, SublimeText, ...
}
function task02() {
Создаем на Github репозиторий cwp-01, клонируем его и открываем в выбранной IDE
В корне проекта создадим файл index.js и напишем там следующий код:
console.log('Hello World');
Откроем терминал и перейдем в папку с проектом. В WebStorm в левом нижнем углу есть вкладка Terminal, которой можно воспользоваться вместо открытия терминала и перехода в папку проекта
В терминале выполняем команду node index.js. Должны увидеть текст приветствия
Создадим коммит с сообщением code greetings
}
function task03() {
Внесем изменения в скрипт для того, чтобы сделать персонализированное приветствие:
const name = process.argv[2];

console.log(`Hi ${name}!`);
Повторим вызов из терминала с добавлением какого-нибудь имени node index.js MyNameIs
Создадим коммит с сообщением change to personal greetings
}
function task04() {
Самостоятельно сделаем печать любого количества переданных в скрипт агрументов
Создадим коммит с сообщением print all command line arguments
При написании кода мы всегда стремимся делать коммиты как можно меньших размеров. Один коммит должен содержать только одно логическое изменение: project init, add X dependency, add Y module, insert Y module into navigation, add tracking to Y module, ...
}
function task05() {
Пришло время для первого серьезного задания. Напишем свой крутой скрипт для работы с файловой системой
1. Скрипт должен принимать путь к директории в качестве входного аргумента
2. Скрипт должен cоздавать в этой директории файл summary.js, который при запуске выводит список всех файлов директории включая файлы в подпапках. То есть, скрипт должен создать еще один скрипт. Его можно составить как набор операций console.log или массив строк, с циклом и console.log. Пути которые выводит summary.js должны быть относительными. Допустим указана директория /users в которой лежат файлы /users/code.txt, /users/secret-code.txt и /users/xyz/top-sectet-code.txt. Тогда скрипт напечатает code.txt, secret-code.txt, xyz/top-secret-code.txt
3. Скрипт должен создавать внутри переданной директории вложенную директорию с таким же именем, в которую копировать все *.txt файлы с добавлением в начало и конец каждого строку копирайта
4. Для хранения строки копирайта создайте файл config.json, куда и поместите в JSON формате в поле copyright вашу строку
5. Скрипт должен обрабатывать различные внештатные ситуации и не падать. Например, если переданной директории не существует
6. В конце своего выполнения скрипт должен начать отслеживание изменений в директории со скопированными *.txt файлами и после каждого изменения выводить на консоль имя файла который отредактировали
7. Вам понадобятся методы из File System и Path
8. Нельзя использовать синхронные версии методов (XSync)
9. Не забываем про маленькие коммиты
}
function task06() {
Синхронизируем локальный репозиторий с удаленным (сделаем push на Github)
}

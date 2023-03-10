/**
 * @file wanted-pre-onboarding-challenge-fe-2
 * @author yeongmin jo
 * @see {@link https://github.com/0miiii/wanted-pre-onboarding-challenge-fe-2|GitHub}
 */

/**
 * Todo definition
 * @namespace
 * @property {string} id - todo id
 * @property {string} content - todo 내용
 * @property {boolean} completed - todo 완료 여부
 * @property {string} category - todo 카테고리
 * @property {tag[]} tags - todo tags
 */
let todo;

/**
 * Tag definition
 * @namespace
 * @property {string} id - tag id
 * @property {string} name - tag name
 */
let tag;

/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 있다.
 *@param {Object} todoData
 *@param {string} [todoData.content] - todo 내용
 *@param {boolean} todoData.completed - todo 완료 여부
 *@param {string} todoData.category - todo 카테고리
 *@param {string[]} [todoData.tags] - todo 태그들
 */
function createTodo(todoData) {}

/**
 * 모든 할 일을 조회할 수 있다.
 * @returns {todo[]}
 */
function getTodos() {}

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 *@param {string} id - todo 아이디
 *@returns {todo}
 */
function getTodoById(id) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 *@param {string} id - todo id
 */
function updateTodo(id) {}

/**
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 *@param {string} todoId - todo id
 *@param {tag[]} tags - todo tags
 */
function updateTodoTags(todoId, tags) {}

/**
 *모든 할 일을 제거할 수 있다.
 */
function deleteTodos() {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 *@param {string} id - todo id
 */
function deleteTodoById(id) {}

/**
 *특정 할 일의 모든 태그를 제거할 수 있다.
 *@param {string} todoId - todo id
 */
function deleteTodoTags(todoId) {}

/**
 *특정 할 일의 특정 태그를 삭제할 수 있다.
 *@param {string} todoId - todo id
 *@param {string} tagId - tag id
 */
function deleteTodoTagById(todoId, tagId) {}

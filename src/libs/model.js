import shortid from 'shortid'

export function createQuestion(title, options = []) {
  return {title, id: shortid.generate(), options}
}

export function createOption(questionId, title) {
  return {title, id: shortid.generate(), questionId}
}
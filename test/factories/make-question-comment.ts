import { faker } from '@faker-js/faker';

import { UniqueEntityID } from "@/core/entities/unique-entity";
import { QuestionComment, type QuestionCommentProps } from '@/domain/forum/enterprise/entities/questions-comments';

export function makeQuestionComment(
  override: Partial<QuestionCommentProps> = {},
  id?: UniqueEntityID
) {
  const questionComment = QuestionComment.create({
    authorId: new UniqueEntityID(),
    questionId: new UniqueEntityID(),
    content: faker.lorem.text(),
    ...override
  }, id);


  return questionComment;
}
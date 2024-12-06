import { UniqueEntityID } from "@/core/entities/unique-entity";
import { QuestionAttachment, type Props } from '@/domain/forum/enterprise/entities/question-attachment';

export function makeQuestionAttachment(
  override: Partial<Props> = {},
  id?: UniqueEntityID
) {
  const questionAttachment = QuestionAttachment.create({
    questionId: new UniqueEntityID(),
    attachmentId: new UniqueEntityID(),
    ...override
  }, id);


  return questionAttachment;
}
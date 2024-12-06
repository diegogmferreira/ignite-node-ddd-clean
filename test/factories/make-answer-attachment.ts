import { UniqueEntityID } from "@/core/entities/unique-entity";
import { AnswerAttachment, type Props } from '@/domain/forum/enterprise/entities/answer-attachment';

export function makeAnswerAttachment(
  override: Partial<Props> = {},
  id?: UniqueEntityID
) {
  const answerAttachment = AnswerAttachment.create({
    answerId: new UniqueEntityID(),
    attachmentId: new UniqueEntityID(),
    ...override
  }, id);


  return answerAttachment;
}
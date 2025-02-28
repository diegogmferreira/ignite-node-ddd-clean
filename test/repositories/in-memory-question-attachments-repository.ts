import type { QuestionAttachmentRepository } from "@/domain/forum/application/repositories/question-attachments-repository";
import { QuestionAttachment } from "@/domain/forum/enterprise/entities/question-attachment";

export class InMemoryQuestionAttachmentsRepository implements QuestionAttachmentRepository {
  public items: QuestionAttachment[] = [];

  async findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]> {
    const questionComments = this.items.filter(item => item.questionId.toString() === questionId)

    return questionComments;
  }

  async deleteManyByQuestionId(questionId: string): Promise<void> {
    const questionAttachments = this.items.filter(
      item => item.questionId.toString() !== questionId
    )

    this.items = questionAttachments;
  }
}
import type { PaginationParams } from "@/core/repositories/pagination-params";
import type { AnswerComment } from "../../enterprise/entities/answers-comments";

export interface AnswerCommentRepository {
  findById(id: string): Promise<AnswerComment | null>;
  findManyByAnswerId(questionId: string, params: PaginationParams): Promise<AnswerComment[]>;
  create(answerComment: AnswerComment): Promise<void>;
  delete(answerComment: AnswerComment): Promise<void>;
}
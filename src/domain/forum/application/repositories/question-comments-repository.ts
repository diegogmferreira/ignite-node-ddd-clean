import type { PaginationParams } from "@/core/repositories/pagination-params";
import type { QuestionComment } from "../../enterprise/entities/questions-comments";

export interface QuestionCommentRepository {
  findById(id: string): Promise<QuestionComment | null>;
  findManyByQuestionId(questionId: string, params: PaginationParams): Promise<QuestionComment[]>;
  create(questionComment: QuestionComment): Promise<void>;
  delete(questionComment: QuestionComment): Promise<void>;
}
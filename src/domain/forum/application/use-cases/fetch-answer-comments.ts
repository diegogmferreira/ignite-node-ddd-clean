import { right, type Either } from "@/core/either";
import type { AnswerComment } from "../../enterprise/entities/answers-comments";
import type { AnswerCommentRepository } from "../repositories/answer-comments-repository";


interface FetchAnswerCommentsUseCaseRequest {
  page: number;
  answerId: string;
}

type FetchAnswerCommentsUseCaseResponse = Either<null, {
  answerComments: AnswerComment[];
}>

export class FetchAnswerCommentsUseCase {
  constructor(
    private answerCommentsRepository: AnswerCommentRepository,
  ) { }

  async execute({ page, answerId }: FetchAnswerCommentsUseCaseRequest): Promise<FetchAnswerCommentsUseCaseResponse> {
    const answerComments = await this.answerCommentsRepository.findManyByAnswerId(answerId, { page });

    return right({ answerComments })
  }
}
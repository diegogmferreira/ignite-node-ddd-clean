import { right, type Either } from "@/core/either";
import type { QuestionComment } from "../../enterprise/entities/questions-comments";
import type { QuestionCommentRepository } from "../repositories/question-comments-repository";


interface FetchQuestionCommentsUseCaseRequest {
  page: number;
  questionId: string;
}

type FetchQuestionCommentsUseCaseResponse = Either<null, {
  questionComments: QuestionComment[];
}>

export class FetchQuestionCommentsUseCase {
  constructor(
    private questionCommentsRepository: QuestionCommentRepository,
  ) { }

  async execute({ page, questionId }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
    const questionComments = await this.questionCommentsRepository.findManyByQuestionId(questionId, { page });

    return right({ questionComments })
  }
}
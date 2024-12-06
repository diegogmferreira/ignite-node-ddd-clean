import { right, type Either } from "@/core/either";
import type { Answer } from "../../enterprise/entities/answers";
import { AnswersRepository } from "../repositories/answers-repository";


interface FetchQuestionAnswersUseCaseRequest {
  page: number;
  questionId: string;
}

type FetchQuestionAnswersUseCaseResponse = Either<null, {
  answers: Answer[];
}>

export class FetchQuestionAnswersUseCase {
  constructor(
    private answerRepository: AnswersRepository
  ) { }

  async execute({ page, questionId }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answerRepository.findManyByQuestionId(questionId, { page });

    return right({ answers })
  }
}
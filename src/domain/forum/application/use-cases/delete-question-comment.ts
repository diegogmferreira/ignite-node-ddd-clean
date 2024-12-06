import { left, right, type Either } from "@/core/either";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found";
import { QuestionCommentRepository } from "../repositories/question-comments-repository";


interface DeleteQuestionCommentUseCaseRequest {
  authorId: string;
  questionId: string;
}

type DeleteQuestionCommentUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError , {} >

export class DeleteQuestionCommentUseCase {
  constructor(
    private questionCommentRepository: QuestionCommentRepository, 
  ) { }

  async execute({ authorId, questionId }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment = await this.questionCommentRepository.findById(questionId);

    if (!questionComment) {
      return left(new ResourceNotFoundError());
    }
    
    if (authorId !== questionComment.authorId.toString()) {
      return left(new NotAllowedError());
    }

    await this.questionCommentRepository.delete(questionComment);

    return right({})
  }
}
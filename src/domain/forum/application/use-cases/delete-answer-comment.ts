import { left, right, type Either } from "@/core/either";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found";
import { AnswerCommentRepository } from "../repositories/answer-comments-repository";


interface DeleteAnswerCommentUseCaseRequest {
  authorId: string;
  answerId: string;
}

type DeleteAnswerCommentUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, {}>

export class DeleteAnswerCommentUseCase {
  constructor(
    private answerCommentRepository: AnswerCommentRepository, 
  ) { }

  async execute({ authorId, answerId }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment = await this.answerCommentRepository.findById(answerId);

    if (!answerComment) {
      return left(new ResourceNotFoundError());
    }
    
    if (authorId !== answerComment.authorId.toString()) {
      return left(new NotAllowedError());
    }
    

    await this.answerCommentRepository.delete(answerComment);

    return right({})
  }
}
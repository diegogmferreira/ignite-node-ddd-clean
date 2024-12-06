import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity"

interface Props {
  name: string
}

export class Student extends Entity<Props> {
  static create(props: Props, id?: UniqueEntityID) {
    const student = new Student(props, id)

    return student
  }
}
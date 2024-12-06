import { Entity } from "@/core/entities/entity";
import type { UniqueEntityID } from "@/core/entities/unique-entity";

interface Props {
  title: string
  link: string
}

export class Attachment extends Entity<Props> {
  get title() {
    return this.props.title
  }

  get link() {
    return this.props.link
  }

  static create(props: Props, id?: UniqueEntityID) {
    const attachment = new Attachment(props, id)

    return attachment
  }
}
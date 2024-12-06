/* eslint-disable @typescript-eslint/no-explicit-any */
import { UniqueEntityID } from "./unique-entity"

export class Entity<T> {
  private _id: UniqueEntityID
  protected props: T

  
  get id() {
    return this._id
  }

  constructor(props: T, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  public equals(entity: Entity<any>) {
    if (entity === this) {
      return true
    }

    if (entity.id === this.id) {
      return true
    }

    return false
  }
}
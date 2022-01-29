import {action, IReactionDisposer, makeObservable, reaction} from 'mobx';

export default class ReactionModel {
  protected listenersStack: any[];
  private _reactionDisposer: IReactionDisposer;

  constructor(private _expressionCallback: () => any[]) {
    this.listenersStack = [];
    //makeObservable(this)
  }

  @action
  addListener(cb: any) {
    this.listenersStack.push(cb);
    if (this.listenersStack.length > 0 && !this._reactionDisposer) {
      this._reactionDisposer = reaction(() => this._expressionCallback(), () => {
        this.listenersStack.forEach(listener => {
          listener();
        })
      })
    }
  }

  @action
  removeListener(cb: any) {
    const funcIndex = this.listenersStack.indexOf(cb);
    if (funcIndex !== -1) {
      this.listenersStack.splice(funcIndex, 1);
    }

    if (this.listenersStack.length === 0 && this._reactionDisposer) {
      this._reactionDisposer();
      this._reactionDisposer = undefined;
    }
  }

}
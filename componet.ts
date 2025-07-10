export abstract class Component<P extends object = {}> {
  public isMounted = false;

  el: HTMLElement;

  parentEl?: HTMLElement;

  protected _props: P;

  constructor(props?: P) {
    this._props = props ?? ({} as P);
    this.el = this.render();
  }

  get props(): P {
    return this._props;
  }

  abstract render(): HTMLElement;

  update() {
    const newEl = this.render();
    this.el.replaceWith(newEl);
    this.el = newEl;
    this.onUpdate();
  }

  mount(target: HTMLElement) {
    if (this.isMounted) {
      return;
    }
    this.parentEl = target;
    this.parentEl.appendChild(this.el);
    this.isMounted = true;
    this.componentDidMount();
  }

  unmount() {
    if (!this.isMounted) {
      return;
    }

    this.componentWillUnmount();

    this.el.remove();

    this.isMounted = false;
  }

  onUpdate() {}

  componentDidMount() {}
  componentWillUnmount() {}
}

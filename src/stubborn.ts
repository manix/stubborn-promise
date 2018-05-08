export default class StubbornPromise {
  protected cb: () => Promise<any>;
  protected ms = 1;
  protected promise: Promise<any>;

  /**
   * A promise that will never give you up!
   * @param {function} cb function that returns the promise
   * @param {number|function} ms delay between retries, or a function that returns the delay.
   */
  constructor(cb: () => Promise<any>, ms?: number) {
    this.cb = cb;

    if (ms) {
      this.ms = ms;
    }

    this.promise = this.repeat();
  }

  repeat(): Promise<any> {
    return this.cb().catch(() => new Promise(resolve => setTimeout(resolve, this.getDelay())).then(this.repeat.bind(this)));
  }

  then(resolve: any) {
    return this.promise.then(resolve);
  }

  getDelay() {
    this.ms = this.delay(this.ms);
    return this.ms;
  }

  setDelayGetter(getter: (old: number) => number) {
    this.delay = getter;
    return this;
  }

  delay(old: number) {
    return old;
  }
}
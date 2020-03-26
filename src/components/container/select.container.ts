import BasicContainer from './basic.container'

export default class SelectContainer extends BasicContainer {
    static create(id: string): HTMLDivElement {
        return this.__create(id)
    }

    static destroy(): void {
        this.__destroy()
    }
}

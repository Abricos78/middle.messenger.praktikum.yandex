const renderDOM = (query: string, element: HTMLElement): void => {
    const root: Element | null = document.querySelector(query)
    if (!root) throw new Error(`Данный query - ${query}, не найден`)

    root.append(element)
}

export default renderDOM

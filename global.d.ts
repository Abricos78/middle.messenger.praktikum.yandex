declare module '*.svg' {
    const content: string
    export default content
}

declare module '*.hbs' {
    const content: Handlebars.TemplateDelegate
    export default content
}

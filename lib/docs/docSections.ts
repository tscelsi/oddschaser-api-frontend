export interface DocSectionType {
    name: string
    paths: PathType[]
}

export interface PathType {
    name: string
    path: string
    disabled: boolean
}

export default [
    {
        name: 'Getting Started',
        paths: [{
            name: "Overview",
            path: 'overview',
            disabled: false,
        },
        {
            name: "Authentication",
            path: 'authentication',
            disabled: false,
        },
        {
            name: "Making an API Request",
            path: 'making_api_request',
            disabled: false,
        },
        {
            name: "Pagination",
            path: 'pagination',
            disabled: false,
        },
        {
            name: "Search",
            path: 'search',
            disabled: true,
        }],
    },
    {
        name: "Core Resources",
        paths: [{
            name: "Markets",
            path: 'markets',
            disabled: false,
        }, {
            name: "Events",
            path: 'events',
            disabled: false,
        }, {
            name: "Examples",
            path: 'examples',
            disabled: false,
        }]
    }
] as DocSectionType[]
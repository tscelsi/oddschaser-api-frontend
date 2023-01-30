import React from 'react'
import { getFileContent } from '../../lib/docutils'
import ReactMarkdown from 'react-markdown'
import Header from '../../components/molecules/Header'
import DocsSideMenu from '../../components/molecules/DocsSideMenu'
import Highlight, { defaultProps } from "prism-react-renderer";

type Props = {
    content: string
}

const docSections = [
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
]

const DocPage = (props: Props) => {
    return (
        <div className="font-averta min-h-screen flex flex-col bg-black">
            <Header />
            <div className="flex grow text-whyte">
                <DocsSideMenu sections={docSections} />
                <div className="grow flex justify-center">
                    <ReactMarkdown
                        className="mx-16 mt-8 max-w-3xl text-start"
                        children={props.content}
                        components={{
                            h2: ({ children }) => <h2 className="text-4xl font-bold mb-8">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-3xl font-bold my-6">{children}</h3>,
                            h4: ({ children }) => <h4 className="text-2xl font-bold my-6">{children}</h4>,
                            h5: ({ children }) => <h5 className="text-xl font-bold my-8">{children}</h5>,
                            p: ({ children }) => <p className="mb-4 font-light">{children}</p>,
                            a: ({ children, href }) => <a className="bg-gradient-to-r from-[#68E3F9] via-[#F55A9B] to-[#6F6FDD] bg-clip-text text-transparent hover:opacity-70" href={href}>{children}</a>,
                            em: ({ children }) => <em className="font-semibold uppercase text-sm text-violet-100 not-italic">{children}</em>,
                            strong: ({ children }) => <strong className="text-sm font-bold">{children}</strong>,
                            hr: () => <div className="h-px mx-auto my-12 bg-gradient-to-r from-[#68E3F9] via-[#F55A9B] to-[#6F6FDD]" />,
                            blockquote: ({ children }) => <blockquote className="pl-8 mb-4">{children}</blockquote>,
                            code: ({ children }) => {
                                let codeBlock = children[0] as string
                                codeBlock = codeBlock.trim()
                                return (<div className="overflow-hidden">
                                    <Highlight {...defaultProps} code={codeBlock} language="json">
                                        {({ style, tokens, getLineProps, getTokenProps }) => (
                                            <pre className="p-4 rounded-lg mb-4" style={style}>
                                                {tokens.map((line, i) => (
                                                    <div {...getLineProps({ line, key: i })}>
                                                        {line.map((token, key) => (
                                                            <span {...getTokenProps({ token, key })} />
                                                        ))}
                                                    </div>
                                                ))}
                                            </pre>
                                        )}
                                    </Highlight>
                                </div>)
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: docSections.map(section => section.paths.map(pathObj => ({ params: { docpage: pathObj.path } }))).flat(),
        fallback: false, // can also be true or 'blocking'
    }
}

export const getStaticProps = async (context: any) => {
    const { docpage } = context.params
    const content = getFileContent(docpage)
    return {
        props: {
            content,
        },
    }
}

export default DocPage
import { Helmet } from "react-helmet-async";

export const SEO = ({title, description, content }) => {
    return(
        <Helmet>
            <title>{title}</title>
            <meta name={description} content={content} />
            <meta name="author" content="Pia Torain" />
        </Helmet>
    )
}
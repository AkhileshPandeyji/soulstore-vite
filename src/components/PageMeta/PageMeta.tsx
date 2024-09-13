import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

interface PageMetaProps extends PropsWithChildren {
  pageTitle: string;
  pageIcon?: string;
  pageDescription: string;
};

const PageMeta: React.FC<PageMetaProps> = (props: PageMetaProps) => {

  const { pageTitle, pageDescription, pageIcon = "favicon.ico", children } = props;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link type="icon | image/svg" href={pageIcon} />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {children}
    </>
  )
}

export default PageMeta;
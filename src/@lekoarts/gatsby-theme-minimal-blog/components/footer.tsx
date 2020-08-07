/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
      {new Date().getFullYear()} &copy;  All rights reserved.
      </div>
      <div>
       Created by
        {` `}
        <Link aria-label="Link to the author's website" href="https://gkalmoukis.com">
        {siteTitle}
        </Link>
      </div>
    </footer>
  )
}

export default Footer

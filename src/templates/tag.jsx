import React from "react";
import { Link as GatsbyLink, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Layout from "src/layout";

const TaggedContent = ({ data, pageContext }) => {
  const { totalCount } = data.articles;
  return (
    <Layout>
      <Box mb={1}>
        <Typography variant="h4" align="center">
          {pageContext.tag}
        </Typography>
        <Typography variant="h5" align="center">
          {totalCount} {totalCount === 1? "article" : "articles"}
        </Typography>
      </Box>
      {data.articles.edges.map((edge) => (
        <Box component={Card} my={1}>
          <CardActionArea component={GatsbyLink} to={`/articles/${edge.node.fields.slug}`}>
            <CardContent>
              <Typography variant="h5" color="textSecondary">
                {edge.node.frontmatter.title}
              </Typography>
              <Typography variant="h6">
                {edge.node.frontmatter.date} &middot;{" "}
                {edge.node.timeToRead} min read
              </Typography>
              {edge.node.excerpt}
            </CardContent>
          </CardActionArea>
        </Box>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query($tag: String) {
    articles: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          excerpt(truncate: true, pruneLength: 300)
          timeToRead
        }
      }
    }
  }`;

export default TaggedContent;

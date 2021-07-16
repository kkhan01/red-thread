// Comments in Javascript look like this
// There are 5 things to do
// We always import React first
import React from "react";
// This is a component used for fonts
import Typography from "@material-ui/core/Typography";
// This is a component used for links
import Link from "@material-ui/core/Link";
// This is a function used to make CSS
import { makeStyles } from "@material-ui/core/styles";

// This is a component I wrote
import SEO from "src/components/SEO";
// This is a component I wrote
import Layout from "src/layout";

// This is where we make CSS in javascript
// You can read more in the MaterialUI documentation
// We are making a function that returns an object
const useStyles = makeStyles((theme) => ({
  coloredLink: {
    color: theme.palette.text.secondary
  }
}));


// This is a list
const examples = ["reactjs.org", "nextjs.org", "gatsbyjs.com"];

// TODO: (1) fill this list with 7 strings
const queryResults = ["ab", "cd", "ef", "gh", "ij", "kl", "mn"];



// This could have been
/*    class Part8 extends React.Component {
        render() {
          return (
            <Layout>...</Layout>
          );
        }
      }
*/
//But it's shorter to make a function. 
const Part8 = () => {
  //This is how we inject CSS from above
  const classes = useStyles();
  return (
    <Layout>
      {/* Comments in JSX are like this */}
      {/* The root element is always Layout */}
      {/* Next comes SEO, which has info for Search Engines */}
      <SEO title="Part 8" />
      {/* This is basically an <h3> tag. But we use Typography for the fonts and sizing. It comes from the package MaterialUI */}
      <Typography variant="h3" align="center">
        Your Page on <i>The Icarus</i>
      </Typography>
      <div>
      {/* TODO: (2) Make a typography with variant="h4" */}
      <Typography variant="h4" align="center">
        Sign Up For Our Mailing List
      </Typography>
        {/*<h4>Sign Up For Our Mailing List</h4>*/}
      {/* TODO: (3) Change the p tags to Typography with variant="body1" */}
      <Typography variant = "body1" align = "center">
        Itaque earum rerum hic tenetur a sapiente delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
      </Typography>
      <Typography variant="body1" align = "center">
        Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. At vero eos et accusamus. Facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.
      </Typography>
      {/*<p>Itaque earum rerum hic tenetur a sapiente delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
      <p>Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. At vero eos et accusamus. Facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.</p>/*}
      {/* TODO: (4) Add a Link component. Ctrl+f for it in about.jsx to see how to use it.*/}
      <Link title = "New Article" href = "http://localhost:8000/articles/2021/07/14/New-Article">New Article</Link>
      {/* Make it link to your article. The title attribute is the text that appears when you hover over the link. */}
      {/* The Link component boils down to an <a> tag */}
      </div>
    {/* This is how you loop through javascript lists in HTML to declaratively make HTML tags.
        You start with curly braces to signal you're writing Javascript.
        Next, call the map() method on the array variable.
        The map() method takes one parameter: a function. This function is like the body
        of a for loop. However, it must return something to render */}
    {/* "ex" is a parameter which holds each string, like in a for loop.
        The function returns JSX (html tag made through javascript). 
        We insert javascript variables into JSX with curly braces.
        Here I am setting the href and text of the link to the variable "ex"*/}
      <ul>
        {examples.map(ex => (
          <li><a href={ex}>{ex}</a></li>
        ))}
      </ul>
    {/* TODO: (5) Now do the same with queryResults. Except instead of links, make it generate
      paragraphs. */}
      {queryResults.map(result => (
        <p><a href={result}>{result}</a></p>
      ))}
    </Layout>
  );
};

// You have to export the function which renders things
// Otherwise, gatsby won't be able to see it
export default Part8;

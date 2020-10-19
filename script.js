marked.setOptions({
  breaks: true, // Add <br> on single line breaks,
  gfm: true }); // and use GitHub Flavored Markup specs.


const example =
`# header 1
## header 2
[link]()
This is some \`inline code\`.
\`\`\`
this is a codeblock
\`\`\`
- this is a list item

> this is a blockquote

this is an image!
![img](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Focticons%2F1024%2Fmarkdown-128.png&f=1&nofb=1)
**bold** text
`;

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      text: example 
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value 
    });
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", { className: "text-primary display-3 text-center" }, "Markdown Previewer"),
      React.createElement(Editor, { onChange: this.handleChange, text: this.state.text }),
      React.createElement(Preview, { text: this.state.text }))
    );
  }}


const Header = props => {
  return (
    React.createElement("div", { className: "jumbotron p-0 m-0 shadow-lg border border-primary rounded-0 bg-primary font-weight-bold" }, props.title)
  );
};

const Editor = props => {
  return (
    React.createElement("div", { className: "row" },
    React.createElement("div", { className: "col-sm-8 offset-sm-2" },
    React.createElement(Header, { title: "# Editor" }),
    React.createElement("textarea", { className: "text-white bg-dark shadow-lg border border-primary rounded-0 p-2 mb-5 w-100", rows: "10", id: "editor", onChange: props.onChange, value: props.text })))
  );
};

const Preview = props => {
  return (
    React.createElement("div", { className: "row" },
    React.createElement("div", { className: "col-sm-10 offset-sm-1" },
    React.createElement(Header, { title: "< /> Preview" }),
    React.createElement("div", { className: "bg-light shadow-lg border border-primary rounded-0 p-2 mb-5 w-100", id: "preview", dangerouslySetInnerHTML: { __html: marked(props.text) }, readOnly: true })))
  );
};

ReactDOM.render(React.createElement(Application, null), document.getElementById("root"));

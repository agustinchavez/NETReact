var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! 나는 코멘트 박스 다.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

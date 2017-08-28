/**
 * Created by jmichelin on 4/3/17.
 */
class NotesList extends React.Component {

  let notes = notesList.map((note, index) => {
  return <l1 className="list-group-item" key={index}>{note['.value']}</l1>
})

  render() {
    console.log(this.props)
    // { notes } = this.props;
    return (
      <ul className="list-group">{ notes } </ul>
    )
  }
}
}

let interviewQuestions = interviewQuestionList.map((interviewQuestion, index) => {
  let curKey = interviewQuestion._id || index;
  return <InterviewQuestion interview={interviewQuestion} key={curKey}
                            removeQuestion={this.handleRemoveQuestion.bind(this)}
                            updateQuestion={this.props.updateQuestion}
                            customValidateText={this.customValidateText.bind(this)}/>
});
